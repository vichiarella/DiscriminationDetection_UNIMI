import React  from 'react'
import { ComboBox, CommandBar, DefaultButton, ICommandBarItemProps, IDropdown, IDropdownOption, Label, Stack, StackItem, Text, TextField, Toggle, TooltipHost } from '@fluentui/react'
import TextTokenizer from '../componets/textTokenizer'
import Card from '../componets/cardcontainer'
import TagList from '../componets/tagList'
import { BASE_URL } from '../const/const'

interface LandingState {
    text: string
    tokens: string[]
    jobId:  string,
    reason: string,
    domains: IDropdownOption[],
    selectedDomain: string,
    labels: IDropdownOption[],
    selectedLabel: string,
    show_userinfo: boolean,
    show_tooltip_inclusive: boolean
}

interface LandingProps {

}


class AnnotationPage extends React.Component<LandingProps, LandingState>{  

    constructor(props: LandingProps ){
        super(props)
        this.state = {
            text: "",
            domains: [],
            labels: [],
            selectedDomain: '',
            selectedLabel: '',
            jobId: '',
            reason: '',
            tokens: [],
            show_userinfo: true,
            show_tooltip_inclusive: false,
        }
        this.onChangeSelectedToken = this.onChangeSelectedToken.bind(this)
        this.getDomains = this.getDomains.bind(this)
        this.getLabels = this.getLabels.bind(this)
        this.onCreateAnnotation = this.onCreateAnnotation.bind(this)
        this.disableSave = this.disableSave.bind(this)
    }
    
    
    async componentDidMount() {
        await this.getDomains()
        await this.getLabels()
        await this.getJobUnannotedText()

    }
    disableSave = (): boolean =>{
        let { reason, selectedDomain, selectedLabel, tokens } = this.state
        return !reason || !selectedDomain || !selectedLabel || !tokens?.length
    }
    onChangeSelectedToken = (word: string) =>{
        // prevSelectedWords.includes(word)
        
        this.setState( (prevState) => {
            let newTokens = prevState.tokens.includes(word) ? prevState.tokens.filter((w: string) => w !== word)
            : [...prevState.tokens, word]

            return { tokens: newTokens }
        })
    }

    getDomains = async () =>{
        const domainsDatares = await fetch(BASE_URL+'/domains');

        const domainsData = (await domainsDatares.json()).map((x:any)=> ({ key: x._id, text: x.domain }));
    
        this.setState({ domains: domainsData})
        
    }
    getLabels = async () =>{
        const labelsDate = await fetch(BASE_URL+'/labels');

        const label = (await labelsDate.json()).map((x:any)=> ({ key: x._id, text: x.label }));
    
        this.setState({ labels: label})
        
    }
    getJobUnannotedText = async () =>{
        const jobpostDataRes = await fetch(BASE_URL+'/jobposts/random');

        const jobpostData = (await jobpostDataRes.json());

        this.setState({
            jobId: jobpostData._id,
            text: jobpostData.text,
            tokens: []
        })


    }
    
    onCreateAnnotation = async () =>{
        const profile = localStorage.getItem('profile')
        var profileId = JSON.parse(profile?? "").id

        var dataFromState = {
            text: this.state.text,
            text_id: this.state.jobId,
            domain: this.state.selectedDomain,
            label: this.state.selectedLabel,
            reason: this.state.reason,
            annotator: profileId,
            tokens: this.state.tokens
        }

        const response = await fetch(BASE_URL+'/annotations/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataFromState),
          });
    
          if (response.ok) {
            const data = await response.json();

        }
        

        this.setState({ 
            selectedDomain: '',
            selectedLabel: '',
            tokens: [],
            reason: ''
        }, () =>{
            this.getJobUnannotedText()
        })
    }

    render(){
        const { text, tokens, domains, labels, selectedDomain, selectedLabel } = this.state
        return (<div>
            <CommandBar
                items={[{
                    key: 'Save',
                    text: 'Save annotation',
                    iconProps: { iconName: 'Save' },
                    disabled: this.disableSave(),
                    onClick: (ev) => { this.onCreateAnnotation() }  
                },
                {
                    key: 'next',
                    text: 'Next random jobpost',
                    iconProps: { iconName: 'CommentNext' },
                    onClick: () =>{ this.getJobUnannotedText()} 
                }]}/>
            <Stack 
            styles={{
                root: {
                    width: '100%',
                    height: '90vh'
                }}} 
                tokens={{ childrenGap: 10, padding: 8 }} >
                    
                <Text variant={'xLarge'} >Discriminatory language in Job Description</Text>
                <Stack >
                    <Stack horizontal
                            style={{ 
                                display: 'flex',}} horizontalAlign='space-evenly' >
                        <Stack.Item style={{ overflow: 'auto'}}>
                            <Card>
                                <TextTokenizer text={text} onSelectChange={this.onChangeSelectedToken} tokens={tokens}/>
                            </Card>
                        </Stack.Item>
                        <Stack style={{ minWidth: '25%'}}>
                            <Card>
                                <TagList tagList={tokens}/>
                            </Card>
                            <Card>
                                <ComboBox 
                                    label='Label'
                                    options={ labels }
                                    selectedKey={selectedLabel}
                                    onChange={(ev, opt) => this.setState({ selectedLabel: opt?.key as string})}/>
                            </Card>
                            <Card>
                                <ComboBox 
                                    label='Domain'
                                    options={ domains }
                                    selectedKey={ selectedDomain }
                                    onChange={(ev, opt) => this.setState({ selectedDomain: opt?.key as string})}/>                           
                            </Card>
                            <Card>
                                <TextField 
                                    label='Reason'
                                    rows={6}
                                    resizable={false}
                                    value={this.state.reason}
                                    onChange={(ev, text) => this.setState({ reason: text ?? ""})}
                                    multiline/>                           
                            </Card>
                            
                        </Stack>
                    </Stack>
                </Stack>
        </Stack>
        </div>)
    }
    
}
export default AnnotationPage

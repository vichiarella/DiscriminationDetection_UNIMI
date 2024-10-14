import React from 'react'
import { BASE_URL } from '../const/const'
import Card from '../componets/cardcontainer'
import { Stack, Text } from '@fluentui/react'

interface LandingProps {

}

interface LandingState {
    mainText: string
    lang: string
}

const landingPageKey = 'landingpage_text'

class LandingPage extends React.Component<LandingProps, LandingState>{  

    constructor(props: LandingProps ){
        super(props)
        this.state = {
           mainText: '',
           lang: 'ita'
        }

    }

    componentDidMount(): void {
        fetch(BASE_URL+`/configurations/${landingPageKey}_${this.state.lang}`)
            .then(x => x.json())
            .then(x=> {
                this.setState({ mainText: x.value})
            })
    }
    render() {
        const { mainText } = this.state
        return(<Stack>
                    <Card>
                        <Text>
                            {mainText}
                        </Text>
                    </Card>
                </Stack>)
    }
}

export default LandingPage
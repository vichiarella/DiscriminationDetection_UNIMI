import React  from 'react'
import { BASE_URL } from '../const/const'
import { DetailsList, IColumn, SelectionMode } from '@fluentui/react'
import Card from '../componets/cardcontainer';
import { parseISO } from 'date-fns';

interface IHistoryData {
    key: string;
    title: string;
    domain: string;
    label: string;
    reason: string;
    createdOn: number;
}
const historyColumns: IColumn[] = [
    {
        key: '1',
        name: 'Title',
        fieldName: 'title',
        minWidth: 300,
        isResizable: true
    },
    {
        key: '2',
        name: 'Domain',
        fieldName: 'domain',
        minWidth: 100,
        isResizable: true
    },
    {
        key: '3',
        name: 'Label',
        fieldName: 'label',
        minWidth: 100,
        isResizable: true
    },
    {
        key: '4',
        name: 'Reason',
        fieldName: 'reason',
        minWidth: 100,
        isResizable: true
    },
    {
        key: '5',
        name: 'Created on',
        fieldName: 'createdOn',
        minWidth: 200,
        isResizable: true,
        onRender: (item) => parseISO(item?.createdOn).toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
        
    }
]

interface PersonalHistoryState {
    historyDataList: []
    historyColumns: IColumn[]
    historyRow: IHistoryData[]
    page: string
}
interface PersonalHistoryProps {

}

class History extends React.Component<PersonalHistoryProps, PersonalHistoryState> {
    constructor(props: PersonalHistoryProps){
        super(props)
        this.state = {
            historyDataList: [],
            historyColumns: [],
            historyRow: [],
            page: '',
        }
        this.getAnnotationHistory = this.getAnnotationHistory.bind(this)
    }

    async componentDidMount() {
        await this.getAnnotationHistory()
    }

    async getAnnotationHistory() {
        const profile = localStorage.getItem('profile')
        var profileId = JSON.parse(profile?? "").id

        const response = await fetch(BASE_URL+`/annotations/${profileId}`);
    
        if (response.ok) {
            const data = await response.json();
            this.setState({
                historyRow: data.map((data: any) =>({ key: data.annotationId, ...data}))
            })
        }
    }

    onClickeDelete = () => {}

    onClickOpen = () => {}

    render(){
        const { historyRow } = this.state
        return(<div>
            <Card>
                <DetailsList 
                    selectionMode={SelectionMode.none}
                    compact
                    columns={historyColumns}
                    items={historyRow}/>
            </Card>
            </div>)
    }
}

export default History
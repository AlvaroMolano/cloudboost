import React from 'react'
import ReactDOM from 'react-dom'
import Checkbox from 'material-ui/Checkbox'
import AutoComplete from 'material-ui/AutoComplete'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table'

class ACLRows extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            roles: []
        }
    }
    componentWillMount() {
        let userQuery = new CB.CloudQuery('User')
        userQuery.find().then((list) => {
            this.state.users = list
            this.setState(this.state)
        })
        let roleQuery = new CB.CloudQuery('Role')
        roleQuery.find().then((list) => {
            this.state.roles = list
            this.setState(this.state)
        })

    }
    getName(id, type) {
        if (type == 'user' && this.state.users.length) {
            return this.state.users.filter((x) => {
                return x.id == id
            })[0].document.username
        } else if (type == 'role' && this.state.roles.length) {
            return this.state.roles.filter((x) => {
                return x.id == id
            })[0].document.name
        } else {
            return ''
        }
    }
    selectUser(chosen) {
        let isPresent = this.props.aclList.filter(x => x.id == chosen.split(' - ')[1].split('(')[0].trim()).length
        if (chosen && !isPresent) {
            let aclObj = {}
            aclObj.type = chosen.split(' - ')[0].toLowerCase()
            aclObj.id = chosen.split(' - ')[1].split('(')[0].trim()
            aclObj.data = {
                read: false,
                write: false
            }
            this.props.addAcl(aclObj)
        }
    }
    getSearchItems() {
        if (this.state.users.length || this.state.roles.length) {
            return [
                ...this.state.users,
                ...this.state.roles
            ].map((x) => {
                let str = x.document['_tableName'] + " - " + x.id
                if (x.document.username)
                    str += ' ( ' + x.document.username + ' )'
                if (x.document.name)
                    str += ' ( ' + x.document.name + ' )'
                return str
            })
        } else
            return []
    }
    removeAcl(id) {
        this.props.removeAcl(id)
    }

    checkHandler(id, which, e, data) {

        let aclData = {}
        if (this.props.aclList.filter(x => x.id == id)[0]) {
            aclData = this.props.aclList.filter(x => x.id == id)[0].data
            aclData[which] = data
            this.props.updateAclData(aclData, id)
        } else {
            let obj = {
                type: 'user',
                id: 'all',
                data: {
                    read: false,
                    write: false
                }
            }
            obj.data[which] = data
            this.props.addAcl(obj)
        }
    }
    render() {
        let aclList = []
        let publicAcl = {
            data: {}
        }
        if (this.props.aclList) {
            aclList = this.props.aclList.filter((x) => {
                if (x.id == 'all') {
                    publicAcl = x
                    return false
                } else
                    return true
            }).map((x, i) => {
                return <TableRow key={i}>
                    <TableRowColumn className="acltdthwidth">
                        {x.type == 'user'
                            ? <i className="fa fa-user logoaclrow" aria-hidden="true"></i>
                            : <i className="fa fa-unlock-alt logoaclrow" aria-hidden="true"></i>
}
                        <p className="textaclrow">{this.getName(x.id, x.type)}
                            ( {x.id}
                            )</p>
                    </TableRowColumn>
                    <TableRowColumn>
                        <p className="readwitetext">Read</p>
                        <Checkbox className='aclrowcheckbox' onCheck={this.checkHandler.bind(this, x.id, 'read')} checked={x.data.read}/>
                    </TableRowColumn>
                    <TableRowColumn>
                        <p className="readwitetext">Write</p>
                        <Checkbox className='aclrowcheckbox' onCheck={this.checkHandler.bind(this, x.id, 'write')} checked={x.data.write}/>
                    </TableRowColumn>
                    <TableRowColumn className="acltddeletethwidth">
                        <i className="fa fa-trash-o cancelaclrow" aria-hidden="true" onClick={this.removeAcl.bind(this, x.id)}></i>
                    </TableRowColumn>
                </TableRow>
            })
        }

        return (
            <div className="relationselectordiv">
                <Table selectable={false} multiSelectable={false} className="acltable">
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
                        <TableRow displayBorder={false}>
                            <TableRowColumn className="acltdthwidth">
                                <i className="fa fa-user logoaclrow" aria-hidden="true"></i>
                                <p className="textaclrow">Public(All)</p>
                            </TableRowColumn>
                            <TableRowColumn>
                                <p className="readwitetext">Read</p>
                                <Checkbox className='aclrowcheckbox' onCheck={this.checkHandler.bind(this, 'all', 'read')} checked={publicAcl.data.read || false}/>
                            </TableRowColumn>
                            <TableRowColumn>
                                <p className="readwitetext">Write</p>
                                <Checkbox className='aclrowcheckbox' onCheck={this.checkHandler.bind(this, 'all', 'write')} checked={publicAcl.data.write || false}/>
                            </TableRowColumn>
                            <TableRowColumn className="acltddeletethwidth"></TableRowColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {aclList}
                        <TableRow>
                            <TableRowColumn className="acltdthwidth">
                                <AutoComplete floatingLabelText="Add User or Role" filter={AutoComplete.fuzzyFilter} dataSource={this.getSearchItems()} maxSearchResults={5} className="selectautoacl" onNewRequest={this.selectUser.bind(this)}/>
                            </TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn className="acltddeletethwidth"></TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default ACLRows;

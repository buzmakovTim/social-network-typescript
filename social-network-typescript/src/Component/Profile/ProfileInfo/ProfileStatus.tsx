import React, {ChangeEvent} from 'react';
import style from './ProfileStatus.module.css'; 

type ProfileStatusPropsType = {
    status: string | null
    statusUpdateCallBack: (status: string) => void
}


// Class component
class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status || ""
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode() {
        this.setState({
            editMode: false
        })
        this.props.statusUpdateCallBack(this.state.status);
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    } 

    render() {

        return (

            <div className={style.status}>


            {!this.state.editMode && <div>
                <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status || '...'}</span>
            </div>}
            
            {this.state.editMode && <div>
                <input autoFocus={true} onChange={this.onChange} onBlur={this.deactiveEditMode.bind(this)} value={this.state.status || ''} />
            </div>}




            </div>
            

        )
    }




}
  
export default ProfileStatus;

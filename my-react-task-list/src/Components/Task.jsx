import './Styles.css';

export const Task =({name, completed}) => {
    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <input type= 'checkbox' checked= {completed} readOnly />
            <span>{name}</span>
        </div>
    )
}
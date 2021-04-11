import React from 'react';

const List = ({
    listHeadLine="Complete List", lists, handelEvent}) => {
    const handleClick = (e) => {
        e.preventDefault();
        handelEvent(e.currentTarget.id);
    };
    const list = lists.map((eachList, index) => (
        <li
            id={eachList.id}
            className={eachList.complete ? 'line-through' : ''}
            onClick={handleClick}
            key={eachList.task + index}
        >
            <input
                type="checkbox"
                checked={eachList.complete ? true : ''}
                id={`todo-list-${index}`}
                readOnly
            />
            <label
                htmlFor={`todo-list-${index}`}
            >
                {eachList.task}
            </label>
        </li>
    ));
    return (<><h2>{listHeadLine}</h2><ul className="todo-list">{list}</ul></>);
}

export default List

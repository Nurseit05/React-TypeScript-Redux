import React, {FC, useState, useRef} from 'react';

const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('')
    const [isDrag, setDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(false)
        console.log('Drop')
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(false)
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='упраавляемый' />
            <input ref={inputRef} type="text" placeholder='неупраавляемый' />
            <button onClick={clickHandler} >Hello world</button>
            <div
                onDrag={dragHandler} draggable 
                style={{width: 200, height: 200, background: 'red'}}
            ></div>
            <div 
                onDrop={dropHandler} onDragLeave={leaveHandler} 
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, 
                    background: isDrag ? 'blue' : 'red', marginTop: 15}} 
            ></div>
        </div>
    );
};

export default EventsExample;
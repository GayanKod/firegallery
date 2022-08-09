import React, {useState} from 'react';

export default function UploadForm(){
    
    const [file, setFile] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);

        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
        }
    }

    return(
        <form>
            <input type="file" onChange={changeHandler}/>
        </form>
    );
}
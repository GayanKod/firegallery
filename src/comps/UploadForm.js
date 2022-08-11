import React, {useState} from 'react';

export default function UploadForm(){
    
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);

        if (selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    return(
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error" style={{"color": red}}>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    );
}
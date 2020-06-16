import React, { useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';
import UploadBtn from './UploadBtn';
import { Button } from '@material-ui/core';
import './style.scss';

const ImageEditing = () => {
    const editorRef = React.createRef();
    const [imgfile, setimgfile] = useState();
    const [reflectImg, setReflectImg] = useState('');

    var whiteTheme = {};
    const handleClickButton = () => {
        const editorInstance = editorRef.current.getInstance();
        const imgUrl = editorInstance.toDataURL();
        setReflectImg(imgUrl);
    };
    console.log(ImageEditor);
    const MyComponent = () => (
        <ImageEditor
            ref={editorRef}
            includeUI={{
                loadImage: {
                      path: imgfile ? URL.createObjectURL(imgfile) : null,
                    name: 'SampleImage',
                },
                theme: whiteTheme,
                // menu: ['shape', 'filter'],
                initMenu: 'filter',
                uiSize: {
                    width: '100%',
                    height: '100vh',
                },
                menuBarPosition: 'bottom',
            }}
            cssMaxHeight={500}
            cssMaxWidth={700}
            selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70,
            }}
            usageStatistics={true}
        />
    );
    return (
        <div className="image-editor-wrapper">
            <div className="left-part">
                <MyComponent />
            </div>
            <div className="right-part">
                <img className="reflect-img" src={reflectImg} alt="" />
                <div className="button-container">
                    <UploadBtn text="upload" getFile={(file) => setimgfile(file[0])} />
                    <Button
                        style={{ width: 150, height: 30, margin: 10, backgroundColor: '#000', color: '#fdba3b' }}
                        onClick={handleClickButton}>
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ImageEditing;

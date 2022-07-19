import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import {uploadExcel} from "../services/UserService";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        marginLeft: '30%'
    },
    input: {
        display: 'none',
    },
    excelButton: {
        marginTop: 20,
        marginLeft: 130
    },
    finalText: {
        marginTop: 20,
        textAlign: 'center'
    }
}));


const UploadUserComponent = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const [excelData, setExcelData] = useState(null);
    
    const {excel} = useSelector(state => state.upload);

    const handleUploadClick = event => {
        let file = event.target.files[0];
        const excelData = new FormData();
        excelData.append('file', file);
        setExcelData(excelData);
    };

    const uploadExcelData = () => {
        dispatch(uploadExcel(excelData));
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    
                    <input
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        className={classes.input}
                        id="upload-excel"
                        type="file"
                        onChange={handleUploadClick}
                    />
                    <label htmlFor="upload-excel">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.excelButton}
                            component="span"
                        >
                            Select Excel File
                        </Button>
                    </label>
                    
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.excelButton}
                        onClick={() => uploadExcelData()}
                    >
                        Upload File
                    </Button>
                    <Typography className={classes.finalText}>{excel === null ? "Select An Excel File To Upload" : "Excel File Uploaded."}</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UploadUserComponent;
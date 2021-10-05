import React from "react";
import parse from "html-react-parser";
import { Typography } from '@mui/material';
import ShowMoreText from "react-show-more-text";
import { Avatar } from '@mui/material';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function QuestionBox(props) {
  //console.log(props);
  let d = new Date(props.data.date);
  let qdate = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
 //console.log(qdate);
  return (
    <Typography marginLeft={2}>
      <Avatar className="avatar">{props.data.name[0].toUpperCase()}</Avatar>
      
      <Typography mt={-5} marginLeft={7}><b>{props.data.name}</b> <i className="email">{props.data.username}</i></Typography>
      <Typography variant="caption" className="a" marginLeft={7}>{qdate}</Typography>
      <Typography className="ques" variant="h6" fontWeight="600">{props.data.question}</Typography>
      {props.data.answers.length>0?props.data.answers.map(function (i, index) {
        let ad = new Date(i.date);
        let adate = `${ad.getMonth()}/${ad.getDate()}/${ad.getFullYear()}`
        return (<div key={i.id}>
        <Avatar className="avatar" style={{height:'30px', width:'30px'}}>{i.name[0].toUpperCase()}</Avatar>
        
        <Typography variant="subtitle2" mt={-4} marginLeft={7}>{i.name}</Typography>
        <Typography variant="caption" marginLeft={7}>{adate}</Typography>
         <div className="ans"> <ShowMoreText
                /* Default options */
                lines={3}
                more="...more"
                less="...less"
                
                expanded={false}
                width={650}    
            >
            {parse(i.content)} </ShowMoreText> </div>
            <Typography mt={2}><ArrowUpwardIcon/>{props.data.upvotes.length>0?'Upvotes:'+props.data.upvotes[0]:`Upvotes:0`}
            <ArrowDownwardIcon/>{props.data.downvotes.length>0?'Downvotes:'+props.data.downvotes[0]:`Downvotes:0`}</Typography>
            </div>)
            
      }
      ): 'No answer'}
     
     
    </Typography>
  );
}

export default QuestionBox;



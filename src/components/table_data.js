import React from 'react';

export default (props) =>{
  if (!props.posts.chatCounts){
    return <div>Loading...</div>;
  }else{
    var i = 1;
    props.posts.chatCounts.map((post) => {
      if (props.url.indexOf('hourly') !== -1){
        var tempPost = {
          no: i,
          date: moment(new Date(post.periodStart)).format("DD/MM/YYYY"), 
          day: moment(new Date(post.periodStart)).format("LT"), 
          inCC: post.incomingChatCount, outCC: post.outgoingChatCount, 
          CC: post.chatCount, 
          CG: post.chatGrowth}; 
        i++;
      }else if (props.url.indexOf('daily') !== -1){
        var tempPost = {
          no: i,
          date: moment(new Date(post.periodStart)).format("DD/MM/YYYY"), 
          day: moment(new Date(post.periodStart)).format("dddd"), 
          inCC: post.incomingChatCount, outCC: post.outgoingChatCount, 
          CC: post.chatCount, 
          CG: post.chatGrowth}; 
        i++;
      }else if (props.url.indexOf('weekly') !== -1){
        var tempPost = {
          no: i,
          date: moment(new Date(post.periodStart)).format("MM/YYYY"), 
          day: _.round((moment(new Date(post.periodStart)).format("D")/7)+1), 
          inCC: post.incomingChatCount, outCC: post.outgoingChatCount, 
          CC: post.chatCount, 
          CG: post.chatGrowth};
        i++;  
      }else if (props.url.indexOf('monthly') !== -1){
        var tempPost = {
          no: i,
          date: moment(new Date(post.periodStart)).format("YYYY"), 
          day: moment(new Date(post.periodStart)).format("MMMM"), 
          inCC: post.incomingChatCount, outCC: post.outgoingChatCount, 
          CC: post.chatCount, 
          CG: post.chatGrowth};
        i++;
      }
      props.CCTable.push(tempPost);         
    });
    return CCTable;
  }
}
import React from 'react';

const FunctionalComp = React.memo((props)=>{
    console.log('re rendered')
    return (
        <div>{props.val}</div>
    )
})

export default FunctionalComp;
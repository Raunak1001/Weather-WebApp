/**
 * Created by raunak on 3/6/17.
 */
import {Sparklines} from 'react-sparklines';
import React from 'react'
import {SparklinesLine} from "react-sparklines";
import _ from 'lodash';


function averager(data){
    return _.round(_.sum(data)/data.length);
}

export default (props)=>{
     return(
         <div>
             <Sparklines height={120} width={150} data={props.data}>
                 <SparklinesLine color={props.color}/>
                 <div>{averager(props.data)}</div>
             </Sparklines>
         </div>
     );


}
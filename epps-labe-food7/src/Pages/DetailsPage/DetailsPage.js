import React from 'react'
import { Feed, Header } from './style';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


const DetailsPage = () => {
    return (
       <Feed>
           <Header>FutureEats</Header>
           <TextField id="outlined-search" label="Restaurante" type="search" variant="outlined">
               <SearchIcon/>
           </TextField>
       </Feed>
    )
}

export default DetailsPage
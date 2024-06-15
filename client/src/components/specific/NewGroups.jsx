import { useInputValidation } from '6pp';
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { SampleUsers } from "../../constants/sampleData";
import UserItem from '../shared/UserItem';


const NewGroups = () => {

  const groupName = useInputValidation("");

  const [members, setMembers] = useState(SampleUsers);
  const [selectedmembers, setSelectedMembers] = useState([]);



  const selectMemberHandler = (id) => {

   
    setSelectedMembers((prev) => prev.includes(id) ? prev.filter((currElement) => currElement !== id) : [...prev, id]);

  };

  const submitHandler = () => { };

  const closeHandler =() => { };
  return (
    <Dialog open  onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} Width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>New Groups</DialogTitle>

        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler} />
        <Typography variant="body1" >Members</Typography>
        <Stack >
          {SampleUsers.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              isAdded={selectedmembers.includes(i._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size='large'>Cancel</Button>
          <Button variant="contained" size='large' onClick={submitHandler}>Create</Button>
        </Stack>

      </Stack>
    </Dialog>
  )
}

export default NewGroups

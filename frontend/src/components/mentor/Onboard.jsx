
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const MentorOnboardForm = ({ onSubmit }) => {
//   const [formValues, setFormValues] = React.useState({
//     fullname: '',
//     email: '',
//     bio: '',
//     expertise: '',
//     experience: '',
//     age: '',
//     address: '',
//     certificate: '',
//     availability_start_time: '',
//     availability_end_time: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formValues);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         padding: '20px',
//       }}
//     >
//       <Box
//         component="form"
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           // alignItems: 'left',
//           // width: '100%',
//           maxWidth: '300px', // Adjust the maxWidth here
//           '& .MuiTextField-root': { m: 1, width: '100%' },
//           '& .MuiButton-root': { mt: 2, width: '100%' },
//         }}
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//       >
//         <div>
//           <TextField
//             required
//             id="fullname"
//             name="fullname"
//             label="Full Name"
//             value={formValues.fullname}
//             onChange={handleChange}
//           />
//           <TextField
//             required
//             id="email"
//             name="email"
//             label="Email"
//             type="email"
//             value={formValues.email}
//             onChange={handleChange}
//           />
//           <TextField
//             id="bio"
//             name="bio"
//             label="Bio"
//             value={formValues.bio}
//             onChange={handleChange}
//           />
//           <TextField
//             id="expertise"
//             name="expertise"
//             label="Expertise"
//             value={formValues.expertise}
//             onChange={handleChange}
//           />
//           <TextField
//             id="experience"
//             name="experience"
//             label="Experience"
//             value={formValues.experience}
//             onChange={handleChange}
//           />
//           <TextField
//             id="age"
//             name="age"
//             label="Age"
//             type="number"
//             value={formValues.age}
//             onChange={handleChange}
//           />
//           <TextField
//             id="address"
//             name="address"
//             label="Address"
//             value={formValues.address}
//             onChange={handleChange}
//           />
//           <TextField
//             id="certificate"
//             name="certificate"
//             label="Certificate"
//             value={formValues.certificate}
//             onChange={handleChange}
//           />
//           <TextField
//             id="availability_start_time"
//             name="availability_start_time"
//             label="Availability Start Time"
//             type="time"
//             value={formValues.availability_start_time}
//             onChange={handleChange}
//           />
//           <TextField
//             id="availability_end_time"
//             name="availability_end_time"
//             label="Availability End Time"
//             type="time"
//             value={formValues.availability_end_time}
//             onChange={handleChange}
//           />
//         </div>
//         <Button variant="contained" type="submit">
//           Mentor Sign Up
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default MentorOnboardForm;
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MentorOnboardForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = React.useState({
    fullname: '',
    email: '',
    bio: '',
    expertise: '',
    experience: '',
    age: '',
    address: '',
    certificate: '',
    availability_start_time: '',
    availability_end_time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundImage: `url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          width: '100%',
          maxWidth: '400px', 
          '& .MuiTextField-root': { m: 1, width: '100%' },
          '& .MuiButton-root': { mt: 2, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            required
            id="fullname"
            name="fullname"
            label="Full Name"
            value={formValues.fullname}
            onChange={handleChange}
          />
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            id="bio"
            name="bio"
            label="Bio"
            value={formValues.bio}
            onChange={handleChange}
          />
          <TextField
            id="expertise"
            name="expertise"
            label="Expertise"
            value={formValues.expertise}
            onChange={handleChange}
          />
          <TextField
            id="experience"
            name="experience"
            label="Experience"
            value={formValues.experience}
            onChange={handleChange}
          />
          <TextField
            id="age"
            name="age"
            label="Age"
            type="number"
            value={formValues.age}
            onChange={handleChange}
          />
          <TextField
            id="address"
            name="address"
            label="Address"
            value={formValues.address}
            onChange={handleChange}
          />
          <TextField
            id="certificate"
            name="certificate"
            label="Certificate"
            value={formValues.certificate}
            onChange={handleChange}
          />
          <TextField
            id="availability_start_time"
            name="availability_start_time"
            label="Availability Start Time"
            type="time"
            value={formValues.availability_start_time}
            onChange={handleChange}
          />
          <TextField
            id="availability_end_time"
            name="availability_end_time"
            label="Availability End Time"
            type="time"
            value={formValues.availability_end_time}
            onChange={handleChange}
          />
        </div>
        <Button variant="contained" type="submit">
          Mentor Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default MentorOnboardForm;

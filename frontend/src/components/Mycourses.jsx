// import React, { useState, useEffect } from 'react';
// import axiosInstance from '../axios/axios';
// import UserNav from './UserNav';
// import UserFooter from './UserFooter';

// const MyCourses = () => {
//   const [mycourse, setMycourses] = useState([]);

//   useEffect(() => {
//     axiosInstance.get('purchased-courses/')
//       .then((res) => {
//         console.log(res.data);
//         setMycourses(res.data.userdata);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <>
//     <UserNav />                                                                 


//     <div>
      
//       <div >

//         {mycourse.map((course, index) => (
//            <div key={index}>
//            {/* <p>ID: {course.id}</p> */}
//            {/* <p>Student Username: {course.student_username}</p> */}
//           <p>Booked Class Thumbnail: <img src={course.booked_class.thumbnail} alt="Booked Class Thumbnail" /></p> 
//            <p>Class Name: {course.class_name.class_name}</p>
//            <p>Order Date: {course.order_date}</p>
//            <p>Booking Date: {course.booking_date}</p>
//            <p>Booking Time: {course.booking_time}</p>
//            <p>Order Time: {course.order_time}</p>
//            <p>Payment Amount: {course.payment_amount}</p>
//            <p>Confirmation Status: {course.confirmation_status ? 'Confirmed' : 'Not Confirmed'}</p>
//            <p>Student ID: {course.student}</p>
//            <p>Booked Class: {course.booked_class.class_name }</p>
//            {/* <p>Booked Class Thumbnail: <img src={course.booked_class.thumbnail} alt="Booked Class Thumbnail" /></p>  */}
//            <p>Booked Clalss: {course.booked_class.mentor }</p> 
//          </div>
//         ))}
//       </div>
      
//     </div>
//     <UserFooter/>
//     </>
//   );
// };
          // <CardContent>
          //     <Typography variant="body2" color="text.secondary">
          //       Booking Date: {course.booking_date}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       Booking Time: {course.booking_time}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       Order Time: {course.order_time}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       Payment Amount: {course.payment_amount}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       Confirmation Status: {course.confirmation_status ? 'Confirmed' : 'Not Confirmed'}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       Student ID: {course.student}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       Booked Class: {course.booked_class.class_name}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       Mentor: {course.booked_class.mentor}
          //     </Typography>
          //   </CardContent> 
// const rectangularBoxStyle = {
//   width: '500px',
//   height: '500px',
//   border: '2px solid #000',
//   padding: '20px',
//   margin: '20px',
// };

// export default MyCourses;


import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios/axios';
import UserNav from './UserNav';
import UserFooter from './UserFooter';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    axiosInstance.get('purchased-courses/')
      .then((res) => {
        console.log(res.data);
        setMyCourses(res.data.userdata);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <UserNav />                                                                 

      <div style={{ margin: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {myCourses.map((course, index) => (
          <Card key={index} style={{ maxWidth: 345 }}>
            <CardHeader
              title={course.class_name.class_name}
               subheader={`course: ${course.class_name}`}
               subheaderTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold', color: 'black', fontSize: '1.2rem' }}
            />
            <CardMedia
              component="img"
              height="194"
              image={course.booked_class.thumbnail}
              alt="Booked Class Thumbnail"
              style={{ objectFit: 'contain', height: '200px' }}
            />

            <CardActions disableSpacing>
              <IconButton
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <CardContent>
              <Typography paragraph hidden={!expanded}>
                Booking Date: {course.booking_date}
              </Typography>
              <Typography paragraph hidden={!expanded}>
                Booking Time: {course.booking_time}
              </Typography>
              <Typography paragraph hidden={!expanded}>
                Order Date: {course.order_date}
              </Typography>
              <Typography paragraph hidden={!expanded}>
                Paid Amount: {course.payment_amount}
              </Typography>
              <Typography paragraph hidden={!expanded}>
                Confirmation Status: <span style={{ color: course.confirmation_status ? 'green' : 'red' }}>
                  {course.confirmation_status ? 'Confirmed' : 'Not Confirmed'}
                </span>
              </Typography>
              <Typography paragraph hidden={!expanded}>
                Student ID: {course.student}
              </Typography>
              <Typography paragraph hidden={!expanded}>
                Booked Class: {course.booked_class.class_name}
              </Typography>
              <Typography paragraph hidden={!expanded}>
                Mentor: {course.booked_class.mentor}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div style={{ margin: '' }}>
        <UserFooter />
      </div>
    </>
  );
};

export default MyCourses;


































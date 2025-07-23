
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Badge from '@mui/material/Badge';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mockDoctors = [
      {
        _id: "1",
        doctorname: "Dr. Sarah Johnson",
        age: 35,
        department: "Cardiology",
        photo: "https://media.gettyimages.com/id/1053401358/photo/female-doctor-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=9X7uj3xCOwNE-PcqPy7VNowiU1BgmDeBCeX6Lg_r8tY="

      },
      {
        _id: "2",
        doctorname: "Dr. Michael Chen",
        age: 42,
        department: "Neurology",
        photo: "https://media.gettyimages.com/id/1139665862/photo/senior-male-doctor-smiling-on-white-background.jpg?s=612x612&w=0&k=20&c=JWiTQUn6u-XwPmtiH58m_BPLEXxo7S9-Tt_CH0JarJk="
      },
      {
        _id: "3",
        doctorname: "Dr. Emily Rodriguez",
        age: 38,
        department: "Pediatrics",
        photo: "https://media.gettyimages.com/id/1307155493/photo/confident-mixed-race-doctor-with-arms-crossed-against-white-background.jpg?s=612x612&w=0&k=20&c=2WiAynzVo7WAFAPQj5D_UTE-onewM8bGEoRBl0Fbn1w="
      },
      {
        _id: "4",
        doctorname: "Dr. David Kim",
        age: 45,
        department: "Orthopedics",
        photo: "https://media.gettyimages.com/id/1468678624/photo/nurse-hospital-employee-and-portrait-of-black-man-in-a-healthcare-wellness-and-clinic-feeling.jpg?s=612x612&w=0&k=20&c=AGQPyeEitUPVm3ud_h5_yVX4NKY9mVyXbFf50ZIEtQI="
      },
      {
        _id: "5",
        doctorname: "Dr. Lisa Thompson",
        age: 39,
        department: "Dermatology",
        photo: "https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=2048x2048&w=is&k=20&c=wNKP09Xuna_qGNmJx54dK5-qyUasdIKxBy81C5NANnk="
      },
      {
        _id: "6",
        doctorname: "Dr. James Wilson",
        age: 41,
        department: "Emergency Medicine",
        photo: "https://thumbs.dreamstime.com/b/portrait-happy-arabic-doctor-male-square-smiling-camera-wearing-white-uniform-233544543.jpg"
      }
    ];

    setTimeout(() => {
      setDoctors(mockDoctors);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Available Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardContent>
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton height={20} width="60%" style={{ marginTop: 10 }} />
                <Skeleton height={20} width="80%" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Available Doctors</h1>
        <Card>
          <CardContent>
            <Typography color="error">{error}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-8 text-center">Available Doctors</h1>

//       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
//         {/* {doctors.map((doc) => (
//           <Card key={doc._id} className="hover:shadow-lg transition-shadow">
//             <CardContent>
//               <Box sx={{ textAlign: 'center' }}>
//                 <img
//                   src={doc.photo}
//                   alt={doc.doctorname}
//                   style={{
//                     width: '120px',
//                     height: '120px',
//                     borderRadius: '50%',
//                     objectFit: 'cover',
//                     marginBottom: '1rem'
//                   }}
//                 />
//                 <Typography variant="h6">{doc.doctorname}</Typography>
//                 <Typography>Age: {doc.age}</Typography>
//                 <Typography>
//                   Department: <Badge color="primary">{doc.department}</Badge>
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="success"
//                   size="medium"
//                   sx={{ mt: 2 }}
//                   onClick={() => navigate('/add', { state: { doctorname: doc.doctorname } })}
//                 >
//                   BOOK
//                 </Button>
//               </Box>
//             </CardContent>
//           </Card>
//         ))} */}
//         {/* {doctors.map((doc) => (
//   <Card key={doc._id} className="hover:shadow-lg transition-shadow">
//     <CardContent>
//       <Box component="section" sx={{ p: 2, border: '1px dashed grey', textAlign: 'center' }}>
//         <img
//           src={doc.photo}
//           alt={doc.doctorname}
//           style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }}
//         />
//         <p><strong>Name:</strong> {doc.doctorname}</p>
//         <p><strong>Age:</strong> {doc.age} years</p>
//         <p><strong>Department:</strong> <Badge>{doc.department}</Badge></p>
//         <Button
//           variant="contained"
//           color="success"
//           size="medium"
//           onClick={() => navigate('/add', { state: { doctorname: doc.doctorname } })}
//           sx={{ mt: 2 }}
//         >
//           BOOK
//         </Button>
//       </Box>
//     </CardContent>
//   </Card>
// ))} */}
// {doctors.map((doc) => (
// //   <Card key={doc._id} sx={{ textAlign: 'center', padding: 2 }}>
// //     <CardContent>
// //       <img
// //         src={doc.photo}
// //         alt={doc.doctorname}
// //         style={{
// //           width: '100px',
// //           height: '100px',
// //           borderRadius: '50%',
// //           objectFit: 'cover',
// //           marginBottom: '1rem'
// //         }}
// //       />
// //       <Typography variant="h6" gutterBottom>
// //         {doc.doctorname}
// //       </Typography>
// //       <Typography variant="body2" color="textSecondary">
// //         Age: {doc.age}
// //       </Typography>
// //       <Typography variant="body2" color="textSecondary" gutterBottom>
// //         Department: {doc.department}
// //       </Typography>
// //       <Button
// //         variant="contained"
// //         color="primary"
// //         sx={{ mt: 1 }}
// //         onClick={() => navigate('/add', { state: { doctorname: doc.doctorname } })}
// //       >
// //         Book Appointment
// //       </Button>
// //     </CardContent>
// //   </Card>
// // ))}
// <Card key={doc._id} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
//   <Box sx={{ flex: 1 }}>
//     <Typography variant="h6" gutterBottom>
//       {doc.doctorname}
//     </Typography>
//     <Typography variant="body2" color="textSecondary">
//       Age: {doc.age}
//     </Typography>
//     <Typography variant="body2" color="textSecondary" gutterBottom>
//       Department: {doc.department}
//     </Typography>
//     <Button
//       variant="contained"
//       color="primary"
//       sx={{ mt: 1 }}
//       onClick={() => navigate('/add', { state: { doctorname: doc.doctorname } })}
//     >
//       Book Appointment
//     </Button>
//   </Box>

//   <Box>
//     <img
//       src={doc.photo}
//       alt={doc.doctorname}
//       style={{
//         width: '100px',
//         height: '100px',
//         borderRadius: '8px', // not 50%, so it's square with rounded corners
//         objectFit: 'cover',
//         marginLeft: '1rem'
//       }}
//     />
//   </Box>
// </Card>

    
   
 
//     ))};
   
//   </div>
  
//   </div>
//   )

  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-8 text-center">Available Doctors</h1>

    <div className="grid grid-cols-1 gap-6">
      {doctors.map((doc) => (
        <Card key={doc._id} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              {doc.doctorname}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Age: {doc.age}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Department: {doc.department}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 1 }}
              onClick={() => navigate('/add', { state: { doctorname: doc.doctorname } })}
            >
              Book Appointment
            </Button>
          </Box>

          <Box>
            <img
              src={doc.photo}
              alt={doc.doctorname}
              style={{
                width: '200px',
                height: '150px',
                borderRadius: '8px',
                objectFit: 'cover',
                marginLeft: '1rem'
              }}
            />
          </Box>
        </Card>
      ))}
    </div>
  </div>
)};

export default Doctor;

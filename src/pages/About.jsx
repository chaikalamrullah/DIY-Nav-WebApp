import Box from '@mui/material/Box';

const AboutPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: 'calc(100vh - 4rem)',
        overflow: 'auto',
        mt: 8,
        p: 4,
      }}
    >
      <h2>About</h2>
      <p> Hey there!

          My name is Chaikal Amrullah, I am a master student at
          Geodesy and Geoinformation, Technical University of Munich, Germany.

          First of all, thank you for participating in the trial of this app.
          This application was made as part of the Project Cartography coursework (Winter Semester 2021/2022)\n
          with the title "Building a Design-It-Yourself Navigation Web App Interface".
          The application is made to find out user preferences related to
          symbol design for navigation applications on Augmented Reality (AR) devices.
          Symbols that can be easily understood by users are expected
          to increase user comfort in using the device and can make it easier
          for users to remember travel routes.
          Before you start, make sure you watch the app usage guide.
          The application user guide video can be seen at the following link... .

         The link to download the Image and supporting information can be found
          at the following link... .

          The source of the icon used in this application comes from the following link:

          - Floor plans
             - Floor plan for Image 1: TUM main campus building official document and private source.
             - Floor plan for Image 2: TUM main campus building official document and private source.
             - Floor plan for Image 3: TUM main campus building official document and private source.
             - Floor plan for Image 4: TUM main campus building official document and private source.
             - Floor plan for Image 5: TUM main campus building official document and private source.
             - Floor plan for Image 6: TUM main campus building official document and private source.
             - Floor plan for Image 7: TUM main campus building official document and private source.

          - Navigation:
             - Disabled Intersection:
             - Left Intersection:
             - Right Intersection:
             - Unavailable:
             - Warning:

          - Rooms:
             - Administration:
             - Class:
             - Computer Lab.:
             - Kitchen:
             - Laboratory:
             - Library:
             - Office:
             - Security Office:
             - Shop:
             - Storage Room:
             - Study Room:
             - Toilet:

          - Hallways:
             - Bench:
             - Door:
             - Elevator:
             - Information:
             - Painting:
             - Plant:
             - Ramps:
             - Stairs:
             - Statue:
             - Utility:

          Acknowledgments for this application are also addressed to
          Shalat, Shabriwa (https://github.com/briwa/react-image-annotate)
          for the initial application development of the application and
          Raisah Irfani, Khonsa for route image visualization.
      </p>
    </Box>
  );
};

export default AboutPage;

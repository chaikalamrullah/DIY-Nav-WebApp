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
          <br>First of all thank you for participating in the trial of this app.
          This application was made as part of the Project Cartography coursework (Winter Semester 2021/2022)
          with title "Building a Design-It-Yourself Navigation Web App Interface".
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
             - Floor plan for Image 1:
             - Floor plan for Image 2:
             - Floor plan for Image 3:
             - Floor plan for Image 4:
             - Floor plan for Image 5:
             - Floor plan for Image 6:
             - Floor plan for Image 7:

          - Navigation:
             -

          - Rooms:
             - Administration:
             - Class:
             - Kitchen:
             - Laboratory:
             - Library:

          - Hallways:
             -


          Acknowledgments for this application are also addressed to
          Shabriwa Shalat (https://github.com/briwa/react-image-annotate)
          for the initial development of the application.</br>
      </p>
    </Box>
  );
};

export default AboutPage;

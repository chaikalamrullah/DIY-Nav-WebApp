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
      <p> Hey there!\n
          First of all thank you for participating in the trial of this app.\n

          This application was made as part of the Project Cartography coursework (Winter Semester 2021/2022)\n
          with title "Building a Design-It-Yourself Navigation Web App Interface".\n
          The application is made to find out user preferences related to\n
          symbol design for navigation applications on Augmented Reality (AR) devices.\n
          Symbols that can be easily understood by users are expected\n
          to increase user comfort in using the device and can make it easier\n
          for users to remember travel routes.\n
          \n
          Before you start, make sure you watch the app usage guide.\n
          The application user guide video can be seen at the following link... .\n
          \n
          The link to download the Image and supporting information can be found\n
          at the following link... .\n
          \n
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
          for the initial development of the application.

      </p>
    </Box>
  );
};

export default AboutPage;

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
      <p> Hey there! <br /> <br />

          My name is Chaikal Amrullah, I am a master student at<br />
          Geodesy and Geo-information, Technical University of Munich, Germany. <br /> <br />

          First of all, thank you for participating in the trial of this app. This application was made as part of <br />
          the Project Cartography coursework (Winter Semester 2021/2022) with the title "Building a Design-It-Yourself <br />
          Navigation Web App Interface". The application is made to find out user preferences related to symbol design <br />
          for navigation applications such as Augmented Reality (AR) devices. The symbols then can be easily understood <br />
          by users are expected to increase user comfort in using the device and can make it easier for users <br />
          to remember travel routes.<br /> <br />
          Before you start, make sure you watch the application guideline. The application user guide video can be seen <br />
          at the following link:
          <br /><br />
          You need also to download the test image and supporting information at the following link:
          <br /><br />

          The source material for this application development such as icons and images comes from the following link:

          <ol>
              <li>Floor plans:
              <ul>
                  <li>Floor plan for Image 1: TUM main campus building official document and private source. </li>
                  <li>Floor plan for Image 2: TUM main campus building official document and private source. </li>
                  <li>Floor plan for Image 3: TUM main campus building official document and private source. </li>
                  <li>Floor plan for Image 4: TUM main campus building official document and private source. </li>
                  <li>Floor plan for Image 5: TUM main campus building official document and private source. </li>
                  <li>Floor plan for Image 6: TUM main campus building official document and private source. </li>
                  <li>Floor plan for Image 7: TUM main campus building official document and private source. </li>
              </ul>
              </li>
              <li>Navigation:
              <ul>
                  <li>Disabled Intersection: https://www.svgrepo.com and personal resource.</li>
                  <li>Unavailable: https://www.svgrepo.com and personal resource.</li>
                  <li>Warning: https://www.svgrepo.com and personal resource.</li>
              </ul>
              </li>
              <li>Rooms:
              <ul>
                  <li>Administration: https://www.svgrepo.com</li>
                  <li>Class: https://www.svgrepo.com</li>
                  <li>Computer Lab.: https://www.svgrepo.com</li>
                  <li>Kitchen: https://www.svgrepo.com</li>
                  <li>Laboratory: https://www.svgrepo.com</li>
                  <li>Library: https://www.svgrepo.com</li>
                  <li>Office: https://www.svgrepo.com</li>
                  <li>Security Office: https://www.svgrepo.com</li>
                  <li>Shop: https://www.svgrepo.com</li>
                  <li>Storage Room: https://www.svgrepo.com</li>
                  <li>Study Room: https://www.svgrepo.com</li>
                  <li>Toilet: https://www.svgrepo.com</li>
              </ul>
              </li>
              <li>Hallways:
                  <ul>
                      <li>Bench: https://www.svgrepo.com</li>
                      <li>Door: https://www.svgrepo.com</li>
                      <li>Elevator: https://www.svgrepo.com</li>
                      <li>Information: https://www.svgrepo.com</li>
                      <li>Painting: https://www.svgrepo.com</li>
                      <li>Plant: https://www.svgrepo.com</li>
                      <li>Ramp: https://www.svgrepo.com</li>
                      <li>Stair: https://www.svgrepo.com</li>
                      <li>Statue: https://www.svgrepo.com</li>
                      <li>Utility: https://www.svgrepo.com</li>
                  </ul>
              </li>
              <li>Images:
                  <ul>
                      <li>Image 1: Personal property</li>
                      <li>Image 2: Personal property</li>
                      <li>Image 3: Personal property</li>
                      <li>Image 4: Personal property</li>
                      <li>Image 5: Personal property</li>
                      <li>Image 6: Personal property</li>
                      <li>Image 7: Personal property</li>
                  </ul>
              </li>
          </ol> <br /><br />

          Acknowledgments for this application are also addressed to Shalat, Shabriwa (https://github.com/briwa/react-<br />
          image-annotate)for the initial application development of the application and Raisah Irfani, Khonsa<br />
          for route image visualization.

      </p>
    </Box>
  );
};

export default AboutPage;

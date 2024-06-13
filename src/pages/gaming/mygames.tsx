import React from 'react';
import Navbar from '../../components/navbar/GamingNavBar'
import Footer from '../../components/Footer'
import BackToTop from '../../components/back-to-top/back-to-top';
import My_Games from '../../components/MyGames';
// import ChangeTheme from '../../components/change-theme/change-theme';

function MyGames() {

  return (
    <>
      <BackToTop />
      {/* <ChangeTheme /> */}
      <Navbar />
      <My_Games />
      <Footer />
    </>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('https://dev.to/api/articles?username=charlex123');
//   const data = await res.json();
//   const filteredBlogs = data.sort(() => Math.random() - 0.5);

//   return {
//     props: {
//       blogs: filteredBlogs
//     },
//   };
// }

export default MyGames

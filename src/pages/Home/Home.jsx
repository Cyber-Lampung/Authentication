import NavBar from "../../components/Navbar";
import SectionBar from "../../components/SectionBar";
import ProfileSingkat from "../../components/ProfileSingkat";
import LayananKami from "../../components/LayananKami";
import Testimony from "../../components/Testimony";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <SectionBar />
        <ProfileSingkat />
        <LayananKami />
        <Testimony />
      </main>
    </>
  );
}

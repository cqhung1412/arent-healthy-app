// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Record from '../components/record/record';
import Photo from '../components/photo/photo';
import DiaryList from '../components/diary-list/diary-list';

export function App() {
  return (
    <>
      Diary List
      <DiaryList />
      Photo
      <Photo 
        imageName="src/assets/images/m01.png"
        imageSpec="05.21.Morning"
      />
      Record
      <Record />
    </>
  );
}

export default App;

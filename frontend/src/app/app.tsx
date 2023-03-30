/* eslint-disable @nrwl/nx/enforce-module-boundaries */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Record from '../components/record/record';
import Photo from '../components/photo/photo';
import DiaryList from '../components/diary-list/diary-list';
import Column from 'src/components/column/column';
import Hex from 'src/components/hex/hex';

export function App() {
  return (
    <>
      Hex
      <Hex />
      Column
      <Column />
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

import {FilePicker} from '@src/components/commons/file_picker';
import {LoadingButton} from '@src/components/commons/loading_btn';
import {MyText} from '@src/components/commons/my_text';
import {ProgressBar} from '@src/components/commons/progress_bar';
import {Layout} from '@src/components/layout';
import {useNavigation} from '@src/navigation';
import {APIServer} from '@src/utils/classes/APIService';
import {Resp, Verb} from '@src/utils/classes/interfaces/APIConstants';
import {NumberRange} from '@src/utils/commons/type';
import {View} from 'native-base';
import React, {useState} from 'react';

export const ProgressBarScreen = () => {
  const [file, setFile] = useState<ArrayBuffer | undefined>();
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const navigation = useNavigation();
  const api = new APIServer('http://10.2.50.26:8080', {
    certignahash: 'ySsPUR23',
    certignarole: 2,
    certignauser: 'pps#test',
  });
  const onFileChange:
    | ((
        pickerResult: any,
        arrayBuffer: ArrayBuffer | undefined,
        base64: string | undefined,
      ) => void)
    | undefined = (_, arrayBuffer) => {
    setFile(arrayBuffer);
  };
  const test = async () => {
    const data = await api.ngrequest(
      '/api/v1/uploads',
      Verb.Post,
      'json',
      [Resp.Created],
      file,
      // {
      //   Authorization:
      //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0aGVvLmNyYWlnQGV4YW1wbGUuY29tIiwibmFtZSI6IlRoZW8gQ3JhaWciLCJpYXQiOjE2NzU2Njg2OTh9.drVU91Hlr04vn3_YbyRefg-jiqAFnSY4pbMz3vM0izo',
      // },
      {
        'Content-Type': 'application/pdf',
        Accept: 'application/json',
        DefaultLanguage: 'fr',
      },
      undefined,
      {
        onUploadProgress: progressEvent => {
          let {loaded, total} = progressEvent;
          setTotal(total ?? 0);
          let percent = Math.floor((loaded * 100) / (total ?? 0));
          console.log(`${loaded}kb of ${total}kb | ${percent}%`);
          setUploadPercentage(percent);
        },
      },
    );
    if (data) {
      setUploadPercentage(0);
      setTotal(0);
    }
  };
  return (
    <Layout navigation={navigation}>
      <View width={'60%'} height={'30%'} mb={16}>
        <MyText type="danger">{uploadPercentage ?? 0}</MyText>
        <FilePicker onFileChange={onFileChange} />
      </View>
      <LoadingButton
        text={'Test'}
        type={'success'}
        onPress={async () => {
          try {
            const data = await test();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }}
      />
      {uploadPercentage > 0 && total > 0 && (
        <>
          <ProgressBar
            step={uploadPercentage as NumberRange<0, 101>}
            steps={100}
          />
          <ProgressBar
            step={uploadPercentage as NumberRange<0, 101>}
            steps={100}
            duration={500}
            height={10}
            width={'100%'}
          />
        </>
      )}
    </Layout>
  );
};

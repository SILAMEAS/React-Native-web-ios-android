import React from 'react';
import {
  Box,
  HStack,
  NativeBaseProvider,
  Pressable,
  Text,
  VStack,
  Image,
  Stack,
  Button,
  Modal,
  useToast,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {setDATA} from '@src/redux/counter/CounterSlice';
interface Obj {
  name: string;
  id: string;
  email: string;
  role: any;
}
const Card = (obj: Obj) => {
  const [showModal, setShowModal] = React.useState(false);
  const datas: any = useSelector((state: any) => state.counter.DATA);
  const displact = useDispatch();
  const toast = useToast();
  const HandleDelete = () => {
    const delete_success = async () => {
      const res = await fetch('http://10.2.50.9:3001/user/delete/' + obj.id, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data) {
        const newData = datas.filter((i: any) => i.id !== obj.id);
        displact(setDATA(newData));
        toast.show({
          description: 'Item Deleted',
          style: {
            backgroundColor: 'green',
          },
        });
      }
    };
    const delete_fail = () => {
      toast.show({
        description: 'Delete Failed',
        style: {
          backgroundColor: 'red',
        },
      });
      setShowModal(false);
    };
    obj.role === 'ADMIN' ? delete_fail() : delete_success();
  };
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.600"
        py="4"
        px="3"
        borderRadius="5"
        rounded="md"
        width={['100%', '40%']}
        maxWidth="100%"
        mt={3}
        key={obj.id}
        h={[' 90%']}
      >
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Alert</Modal.Header>
            <Modal.Body>Are you sure to delete?</Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={HandleDelete}
                  bg={'red.600'}
                  color={'white'}
                  rounded={'lg'}
                >
                  Delete
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <HStack justifyContent="space-between">
          <VStack space="2" justifyContent={'space-around'}>
            <Pressable
              rounded="xs"
              bg={obj.role === 'ADMIN' ? 'red.400' : 'amber.400'}
              alignSelf="flex-start"
              py="1"
              px="3"
            >
              <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white"
              >
                Name : {obj.name}
              </Text>
            </Pressable>
            <Text fontSize="xl" color="white">
              Email : {obj.email}
            </Text>
          </VStack>

          <VStack justifyContent={'flex-end'} space="2">
            <Stack justifyContent={'center'} alignItems="center" space={2}>
              <Image
                source={{
                  uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                }}
                alt="Aang flying and surrounded by clouds"
                height="100"
                rounded="full"
                width="100"
              />

              <Text
                color="white"
                fontSize="sm"
                bg={'red.500'}
                rounded="lg"
                textAlign="center"
                onPress={() => {
                  setShowModal(true);
                }}
                width="5rem"
                py={1}
              >
                Delete
              </Text>
            </Stack>
          </VStack>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Card;

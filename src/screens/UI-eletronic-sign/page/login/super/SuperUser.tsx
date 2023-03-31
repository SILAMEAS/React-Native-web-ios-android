import React from 'react';
import {Box, Button, Center, Text, VStack} from 'native-base';
import {COLOR} from '@src/constant/color/Color';
import {useNavigation} from '@src/navigation';
import {Constant_Navigator} from '@src/navigation/Constant_Navigator';

function SuperUser() {
  const navigate = useNavigation();
  return (
    <Box bg={'white'} h={['100%', '100vh']}>
      <Center h={['100%', '100vh']}>
        <VStack space={3}>
          <Text {...COLOR.Text.title1} textAlign={'center'} mb={10}>
            Welcome to page super admin
          </Text>

          <Button
            size={'sm'}
            onPress={() =>
              navigate.navigate(
                Constant_Navigator.PAGE_CREATE_COMPANY_ACCOUNT_ELECTRONIC,
              )
            }
          >
            Create Company Account
          </Button>
          <Button size={'sm'}>Modify Corporate Admin Account</Button>
          <Button size={'sm'}>Dis-activate Corporate Admin Account</Button>
        </VStack>
      </Center>
    </Box>
  );
}
export default SuperUser;

import {APIServer} from '@src/utils/classes/APIService';
import {Verb} from '@src/utils/classes/interfaces/APIConstants';
import {Box, HStack, View, ScrollView, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PaginationProps} from '.';
import {Loading} from '../loading';
import {LoadingButton} from '../loading_btn';
import {MyText} from '../my_text';
import {Localization} from '@src/i18n/languages';
import {useTranslation} from 'react-i18next';

export function Pagination({
  renderTable,
  render,
  isScroll,
  baseUrl,
  prefixUrl,
  queryString,
  header,
  returnStatus,
  setData,
  position = 'bottom',
  refetch = false,
}: PaginationProps) {
  const {t} = useTranslation();
  const [pages, setPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [dataServer, setDataServer] = useState<[] | undefined>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null | undefined>();
  const api = new APIServer(baseUrl ?? 'http://10.2.50.26:3000', {
    certignahash: 'ySsPUR23',
    certignarole: 2,
    certignauser: 'pps#test',
  });
  const urlFormat = (): string => {
    let stringQueries = `page=${page}`;
    for (let key in queryString) {
      stringQueries += `&${key}=${queryString[key]}`;
    }
    return `${prefixUrl ?? '/api/products'}?${stringQueries}`;
  };
  const LENGTH_PAGINATED = 2;
  const fetchPosts = async () => {
    setLoading(true);

    const url = urlFormat();
    try {
      const {items, totalPages} = await api.ngrequest(
        url,
        Verb.Get,
        'json',
        returnStatus,
        undefined,
        header,
      );
      setPages(totalPages);
      setDataServer(items);
      setData && setData(items);
      setLoading(false);
      setError(undefined);
      // eslint-disable-next-line no-catch-shadow,no-shadow
    } catch (error: any) {
      setLoading(false);
      setError(t(Localization('someErrorOccurred')));
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [page, refetch]);

  let middlePagination: JSX.Element | JSX.Element[];
  if (pages <= LENGTH_PAGINATED) {
    middlePagination = (
      <HStack flexWrap={'wrap'} space={1}>
        {[...Array(pages)].map((_, idx) => (
          <LoadingButton
            key={`${idx + 1}`}
            onPress={() => setPage(idx + 1)}
            disabled={page === idx + 1}
            type={page === idx + 1 ? 'dark' : undefined}
            text={`${idx + 1}`}
          />
        ))}
      </HStack>
    );
  } else {
    const startValue =
      Math.floor((page - 1) / LENGTH_PAGINATED) * LENGTH_PAGINATED;
    middlePagination = (
      <HStack flexWrap={'wrap'} space={1}>
        {[...Array(LENGTH_PAGINATED + pages > 3 && 2)].map((_, idx) => (
          <LoadingButton
            key={`${startValue + idx + 1}`}
            disabled={page === startValue + idx + 1}
            type={page === startValue + idx + 1 ? 'dark' : undefined}
            onPress={() => setPage(startValue + idx + 1)}
            text={`${startValue + idx + 1}`}
          />
        ))}

        <LoadingButton text="..." />
        <LoadingButton onPress={() => setPage(pages)} text={`${pages}`} />
      </HStack>
    );

    if (page > LENGTH_PAGINATED) {
      if (pages - page >= LENGTH_PAGINATED) {
        middlePagination = (
          <HStack flexWrap={'wrap'} space={1}>
            <LoadingButton onPress={() => setPage(1)} text="1" />
            <LoadingButton text="..." />
            <LoadingButton
              onPress={() => setPage(startValue)}
              text={`${startValue}`}
            />
            {[...Array(LENGTH_PAGINATED)].map((_, idx) => (
              <LoadingButton
                key={`${startValue + idx + 1}`}
                disabled={page === startValue + idx + 1}
                type={page === startValue + idx + 1 ? 'dark' : undefined}
                onPress={() => setPage(startValue + idx + 1)}
                text={`${startValue + idx + 1}`}
              />
            ))}

            <LoadingButton text="..." />
            <LoadingButton onPress={() => setPage(pages)} text={`${pages}`} />
          </HStack>
        );
      } else {
        let amountLeft = pages - page + LENGTH_PAGINATED;
        middlePagination = (
          <>
            <LoadingButton onPress={() => setPage(1)} text="1" />
            <LoadingButton text="..." />
            <LoadingButton
              onPress={() => setPage(startValue)}
              text={`${startValue}`}
            />
            {[...Array(amountLeft)].map((_, idx) => (
              <LoadingButton
                key={`${startValue + idx + 1}`}
                disabled={page === startValue + idx + 1}
                type={page === startValue + idx + 1 ? 'dark' : undefined}
                style={pages < startValue + idx + 1 ? {display: 'none'} : null}
                onPress={() => setPage(startValue + idx + 1)}
                text={`${startValue + idx + 1}`}
              />
            ))}
          </>
        );
      }
    }
  }

  return (
    <View height={'100%'} width={'98%'} p={2}>
      <View
        height={'90%'}
        width={'100%'}
        display="flex"
        justifyContent={'center'}
        alignItems="center"
      >
        {position === 'top' && (
          <Page
            pages={pages}
            page={page}
            setPage={setPage}
            middlePagination={middlePagination}
          />
        )}
        <View height={'92%'} width="100%">
          {loading ? (
            <Loading
              spinnerStyle={{
                size: 'lg',
                colorScheme: 'cyan',
              }}
            />
          ) : error ? (
            <VStack
              width={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <MyText type="danger">{error}</MyText>
              <LoadingButton
                onPress={async () => await fetchPosts()}
                text={t(Localization('tryAgain')) ?? ''}
              />
            </VStack>
          ) : render ? (
            isScroll ? (
              <ScrollView height={'100%'} width={'100%'}>
                {dataServer?.map((item, index) => {
                  return <View key={`${index + 1}`}>{render(item)}</View>;
                })}
              </ScrollView>
            ) : (
              dataServer?.map((item, index) => (
                <View key={`${index + 1}`}>{render(item)}</View>
              ))
            )
          ) : (
            renderTable && <>{renderTable(dataServer)}</>
          )}
        </View>
        <Box height={'2%'} />
        {position === 'bottom' && (
          <Page
            pages={pages}
            page={page}
            setPage={setPage}
            middlePagination={middlePagination}
          />
        )}
      </View>
    </View>
  );
}

const Page = ({
  pages,
  page,
  setPage,
  middlePagination,
}: {
  pages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  middlePagination: JSX.Element | JSX.Element[];
}) => {
  return pages > 1 ? (
    <HStack flexWrap={'wrap'} space={1}>
      <LoadingButton
        text="«"
        onPress={() => setPage(_page => _page - 1)}
        disabled={page === 1}
      />
      {middlePagination}
      <LoadingButton
        text="»"
        onPress={() => setPage(_page => _page + 1)}
        disabled={page === pages}
      />
    </HStack>
  ) : (
    <></>
  );
};

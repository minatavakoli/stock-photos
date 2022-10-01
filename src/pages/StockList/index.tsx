import {
  Avatar,
  Box,
  Center,
  Flex,
  Input,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { StyledTemplate } from "./style";
import { PhotoListResponse } from "./types";

const StockList = () => {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<PhotoListResponse[]>([]);
  const [page, setPage] = useState(1);

  const { isLoading } = useQuery(
    ["stockList", page],
    () => {
      return axios
        .get<PhotoListResponse[]>(
          `https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${page}`
        )
        .then((response) => {
          return response.data;
        });
    },
    {
      refetchOnWindowFocus: false,
      enabled: !query,
      onSuccess: (response) => {
        setData((prevData) => [...prevData, ...response]);
      },
    }
  );

  useQuery(
    ["searchList", query, page],
    () => {
      return axios
        .get<PhotoListResponse[]>(
          `https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=${page}&query=${query}`
        )
        .then((response) => {
          return response.data;
        });
    },
    {
      enabled: !!query,
      onSuccess: (response: any) => {
        // @ts-ignore
        setData((prevData) => [...prevData, ...response.results]);
      },
    }
  );

  // '' undefined null 0 => false

  return (
    <div>
      <Flex mt="20px" justifyContent="center" w="100%">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(inputValue);
          }}
        >
          <Input
            w="300px"
            placeholder="Search Photos"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </form>
      </Flex>
      {isLoading && !data.length ? (
        <Center mt="1rem">
          <Spinner />
        </Center>
      ) : (
        <Box mt="2rem" mx="3rem">
          <InfiniteScroll
            dataLength={data.length}
            style={{ overflow: "hidden" }}
            next={() => {
              setPage((prev) => prev + 1);
            }}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <SimpleGrid columns={2} spacing={10}>
              {data?.map((item) => {
                return (
                  <StyledTemplate className="photo">
                    <img src={item.urls.regular} />
                    <Flex
                      className="description-box"
                      justifyContent={"space-between"}
                      p="0.5rem"
                      background={"rgba(0,0,0,0.2)"}
                      // style={{ transform: "translateY(-100%)" }}
                      color="white"
                      fontWeight="bold"
                    >
                      <Box display={"flex"} flexDirection="column">
                        <span>{item.user.name}</span>
                        <span>{item.likes}</span>
                      </Box>
                      <Avatar
                        name="Dan Abrahmov"
                        src={item.user.profile_image.medium}
                      />
                    </Flex>
                  </StyledTemplate>
                );
              })}
            </SimpleGrid>
          </InfiniteScroll>
        </Box>
      )}
    </div>
  );
};

export default StockList;

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:06 PM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: {
        primary: "+ ₹81,123",
      },
      status: "Pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "02:48 PM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: {
        primary: "- ₹55,123",
      },
      status: "Processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "09:21 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: {
        primary: "+ 12.48513391 BTC",
        secondary: "- ₹81,123.10",
      },
      status: "Cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "01:32 PM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: {
        primary: "- 0.36401628 BTC",
        secondary: "+ ₹19,378.84",
      },
      status: "Completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "09:02 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: {
        primary: "+ 4.13946104 BTC",
        secondary: "+ ₹37,929.31",
      },
      status: "Pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "01:56 PM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: {
        primary: "- 10.00000000 BTC",
        secondary: "- ₹62,017.58",
      },
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "#797E82",
    Processing: "#F5A50B",
    Completed: "#059669",
    Cancelled: "#DC2626",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="sm" fontWeight="medium">
                {data.id}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.amount.primary}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.amount?.secondary}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Tag
                  color="white"
                  borderRadius="full"
                  bg={statusColor[data.status]}
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
// "?" used for undefined data values in table
export default TransactionTable;

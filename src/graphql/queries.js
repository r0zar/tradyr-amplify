/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrade = `query GetTrade($id: ID!) {
  getTrade(id: $id) {
    id
    buyerId
    sellerId
    score
    price
    tickets {
      items {
        id
        url
        previewUrl
      }
      nextToken
    }
  }
}
`;
export const listTrades = `query ListTrades(
  $filter: ModelTradeFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      buyerId
      sellerId
      score
      price
      tickets {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTicket = `query GetTicket($id: ID!) {
  getTicket(id: $id) {
    id
    url
    previewUrl
    trade {
      id
      buyerId
      sellerId
      score
      price
      tickets {
        nextToken
      }
    }
  }
}
`;
export const listTickets = `query ListTickets(
  $filter: ModelTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      previewUrl
      trade {
        id
        buyerId
        sellerId
        score
        price
      }
    }
    nextToken
  }
}
`;

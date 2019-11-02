/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrade = `mutation CreateTrade($input: CreateTradeInput!) {
  createTrade(input: $input) {
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
export const updateTrade = `mutation UpdateTrade($input: UpdateTradeInput!) {
  updateTrade(input: $input) {
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
export const deleteTrade = `mutation DeleteTrade($input: DeleteTradeInput!) {
  deleteTrade(input: $input) {
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
export const createTicket = `mutation CreateTicket($input: CreateTicketInput!) {
  createTicket(input: $input) {
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
export const updateTicket = `mutation UpdateTicket($input: UpdateTicketInput!) {
  updateTicket(input: $input) {
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
export const deleteTicket = `mutation DeleteTicket($input: DeleteTicketInput!) {
  deleteTicket(input: $input) {
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

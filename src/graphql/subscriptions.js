/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrade = `subscription OnCreateTrade {
  onCreateTrade {
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
export const onUpdateTrade = `subscription OnUpdateTrade {
  onUpdateTrade {
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
export const onDeleteTrade = `subscription OnDeleteTrade {
  onDeleteTrade {
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
export const onCreateTicket = `subscription OnCreateTicket {
  onCreateTicket {
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
export const onUpdateTicket = `subscription OnUpdateTicket {
  onUpdateTicket {
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
export const onDeleteTicket = `subscription OnDeleteTicket {
  onDeleteTicket {
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

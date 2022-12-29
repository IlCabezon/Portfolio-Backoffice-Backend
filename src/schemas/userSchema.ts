import { Schema, model } from 'mongoose';
import { UserType } from '../types';

const userSchema = new Schema<UserType>({
  gender: {
    type: String,
  },
  name: {
    title: {
      type: String,
      required: true
    },
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  location: {
    street: {
      number: {
        type: Number
      },
      name: {
        type: String
      }
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    country: {
      type: String
    },
    postcode: {
      type: String
    },
    coordinates: {
      latitude: {
        type: Number
      },
      longitude: {
        type: Number
      }
    },
    timezone: {
      offset: {
        type: String
      },
      description: {
        type: String
      }
    }
  },
  email: {
    type: String
  },
  login: {
    uuid: {
      type: String
    },
    username: {
      type: String
    },
    password: {
      type: String
    },
    validation_code: {
      type: String
    }
  },
  dob: {
    date: {
      type: Date
    },
    age: {
      type: Number
    }
  },
  registered: {
    date: {
      type: Date
    },
    age: {
      type: Number
    }
  },
  phone: {
    type: String
  },
  cell: {
    type: String
  },
  identifier: {
    name: {
      type: String
    },
    value: {
      type: String
    }
  },
  picture: {
    type: String,
  },
  nat: {
    type: String
  }
})

const User = model<UserType>('User', userSchema);
export default User;

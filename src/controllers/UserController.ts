import { Request, Response } from 'express'
import { ResponseType, ResponseRoutes } from '../types'
import User from '../schemas/userSchema';
import axios from 'axios'

const fetchUser = async () => {
  try {
    for (let i = 0; i < 1; i++) {
      const { data } = await axios.get('https://randomuser.me/api', {
        headers: { 'Accept-Encoding': 'gzip,deflate,compress' }
      })

      const result = data.results[0]

      const userAlreadyExists : any = User.findOne({ email: result.email })

      if (userAlreadyExists) {

      } else {
        const formattedUser = {
          gender: result.gender,
          name: {
            title: result.name.title,
            first: result.name.first,
            last: result.name.last
          },
          location: {
            street: {
              number: result.location.street.number,
              name: result.location.street.name
            },
            city: result.location.city,
            state: result.location.state,
            country: result.location.country,
            postcode: result.location.postcode,
            coordinates: {
              latitude: result.location.coordinates.latitude,
              longitude: result.location.coordinates.longitude
            },
            timezone: {
              offset: result.location.timezone.offset,
              description: result.location.timezone.description
            }
          },
          email: result.email,
          login: {
            uuid: result.login.uuid,
            username: result.login.username,
            password: result.login.password,
            validation_code: result.login.sha256
          },
          dob: {
            date: result.dob.date,
            age: result.dob.age
          },
          registered: {
            date: result.registered.date,
            age: result.registered.age
          },
          phone: result.phone,
          cell: result.cell,
          id: {
            name: result.id.name,
            value: result.id.value
          },
          picture: result.picture.medium,
          nat: result.nat
        }

        await User.create(formattedUser)
      }
    }
  } catch (err) {
    console.log(err)
  }
}


export { fetchUser }

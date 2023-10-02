"use client"
/* eslint-disable @next/next/no-img-element */
import React, { FormEvent, Fragment, useState } from 'react';


import { useRouter } from 'next/navigation';

const Travel = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [internationalTravel, setInternationalTravel] = useState("No");
  const [passport, setPassport] = useState(false);
  const [preferences, setPreferences] = useState('');
  const [holidayType, setHolidayType] = useState('');
  const [dreamDestination, setDreamDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // const { data, error } = await supabase.from('leads').insert([
    //   {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     cellphone: cellphone,
    //     gender: gender,
    //     age: age,
    //     city: city,
    //     internationalTravel: internationalTravel,
    //     preferences: preferences,
    //     holidayType: holidayType,
    //     dreamDestination: dreamDestination,
    //     passport: passport,
    //   },
    // ]);

    alert('Thank you for subscribing! We will be in touch.');

    // console.log({ data, error });
    setLoading(false);
    router.push('/see-you');
  };

  return (
    <Fragment>
      <div className="overflow-hidden" style={{ minHeight: '600px' }}>
        <div className="relative px-6 mx-auto max-w-7xl pt-7 lg:px-0">
          <div className="grid items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="xl:mt-8">
              <div className="text-3xl font-extrabold text-gray-800 lg:text-6xl xl:text-8xl tracking-1px">
                <h1 className="mt-3 leading-tight lg:text-7xl font-montBold lg:mt-4">
                  Hey there Globetrotter!
                </h1>
              </div>
              <h2 className="mt-2 text-sm leading-7 tracking-wide text-gray-700 lg:w-10/12 lg:mt-6">
                Have you been meaning to book that flight? Do you day dream
                about kicking it back in the clouds while the pilot gets you to
                your dream destination? Who doesn’t want to go on a shopping
                spree in Dubai or sip cocktails on an exotic island? Maybe you
                fancy a party in Ibiza or look forward to capturing an
                instagrammable moment on the Bali Swing right after a floating
                breakfast?
              </h2>
              <h2 className="mt-2 text-sm leading-7 tracking-wide text-gray-700 lg:w-10/12 lg:mt-6">
                Whatever it is, we’ve got you!
              </h2>
              <h2 className="mt-2 text-sm leading-7 tracking-wide text-gray-700 lg:w-10/12 lg:mt-6">
                We help you “Popp Inn” to any destination in the world and give
                you an unforgettable experience of a lifetime.
              </h2>
              <h2 className="mt-2 text-sm leading-7 tracking-wide text-gray-700 lg:w-10/12 lg:mt-6">
                We are not a travel agency. Think of us as Travel Curators! If
                you would like to receive information on our travel innovations
                and packages locally and/or around the world, please fill in the
                form below so we can keep you posted!
              </h2>
            </div>
            <div className="relative object-cover w-full mt-8 lg:mt-0 rounded-3xl">
              <div className="flex flex-wrap items-start lg:px-0 ">
                <div className="">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <img
                        tabIndex={0}
                        src="/images/ny_sol.PNG"
                        alt="New York"
                        className="object-cover rounded-lg lg:h-82"
                      />
                      <img
                        tabIndex={0}
                        src="/images/image00013.jpg"
                        className="object-cover w-full mt-2 rounded-lg h-96"
                        alt="woman"
                      />
                    </div>
                    <div>
                      <div className="grid gap-2">
                        <img
                          tabIndex={0}
                          className="object-cover h-56 rounded-lg aspect-video"
                          src="/images/greece.jpeg"
                          alt="greece"
                        />
                      </div>
                      <img
                        tabIndex={0}
                        src="/images/hamock.jpeg"
                        className="object-cover mt-2 rounded-lg lg:w-full lg:h-96"
                        alt="woman"
                      />
                      <img
                        tabIndex={0}
                        src="/images/yellow.jpeg"
                        className="object-cover mt-2 rounded-lg lg:w-full lg:h-60"
                        alt="golden gate bridge"
                      />
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 mb-12 max-w-7xl">
        <h3 className="px-6 text-2xl text-gray-800 font-montBold lg:px-0">
          {' '}
          Enter your details for exclusive offers
        </h3>

        <form className="w-full px-6 lg:px-0" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-8 gap-y-6">
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                First Name
              </p>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Last Name
              </p>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Email
              </p>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Cell Number
              </p>
              <input
                type="tel"
                required
                value={cellphone}
                onChange={(e) => setCellphone(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Age
              </p>
              <input
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                City
              </p>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>{' '}
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Gender
              </p>
              <select

                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Rather Not Say">Rather Not Say</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Preferences
              </p>
              <select

                required
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value="">Select travelling type</option>
                <option value="Solo Traveller">Solo Traveller</option>
                <option value="Couples">Couples/Baecations</option>
                <option value="Group Travel">Group Travel</option>
                <option value="Boys Trips">Boys Trips</option>
                <option value="Girls Trips">Girls Trips</option>
                <option value="All Of The Above">All Of The Above</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Type of holiday
              </p>
              <select

                required
                value={holidayType}
                onChange={(e) => setHolidayType(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value="">Select type of holiday</option>
                <option value="City">City</option>
                <option value="Beach">Beach</option>
                <option value="Adventure">Adventure</option>
                <option value="Cruise">Cruise</option>
                <option value="Self-drive Roadtrip">Self-drive Roadtrip</option>
                <option value="Concert">Concert</option>
                <option value="Sport">Sport</option>
                <option value="All Of The Above">All Of The Above</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Have you travelled internationally before?
              </p>
              <select

                required
                value={internationalTravel}
                onChange={(e) => setInternationalTravel(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <p className="text-base font-medium leading-none text-gray-800">
                Dream Destination
              </p>
              <input
                type="text"
                required
                value={dreamDestination}
                onChange={(e) => setDreamDestination(e.target.value)}
                className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
              />
            </div>
            <div className="flex items-center justify-center w-full h-full mx-auto space-x-4 pt-7">
              <p className="text-base font-medium leading-none text-gray-800">
                Do you have a passport?
              </p>

              {/* Code block starts */}
              <div className="relative my-5 bg-indigo-700 rounded-full shadow-sm cursor-pointer">
                <input
                  checked={passport}
                  onChange={() => setPassport(!passport)}
                  type="checkbox"
                  name="toggle"
                  id="toggle2"
                  className="absolute top-0 bottom-0 w-6 h-6 m-auto bg-white border border-transparent rounded-full shadow-sm appearance-none cursor-pointer focus:outline-none checkbox"
                />
                <label
                  htmlFor="toggle2"
                  className="block w-12 h-4 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label dark:bg-gray-300"
                />
              </div>
              {/* Code block ends */}
              <style>
                {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #00A1B6;
                    }`}
              </style>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="consent" className="mb-1 text-xs">
              By filling in this form I agree to receive marketing material from
              Popp Inn.
            </label>
            <input
              type="checkbox"
              name="consent"
              required
              checked={consent}
              onChange={(e) => setConsent(!consent)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ backgroundColor: '#00A1B6' }}
            className="text-white text-sm font-montMedium mt-4 px-6 py-2 min-w-[180px] rounded-md"
          >
            {loading ? 'Loading...' : 'Keep Me Posted'}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Travel;




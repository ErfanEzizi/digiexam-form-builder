# digiexam-form-builder

# App description

This application is complited within 5 hours of time for tech quiz requested by Digiexam.

The application uses React and Redux with typescript, To perform a customizable input form for the user, At the moment it includes only `Text` and `CheckBox` as input fields. I could've spent more time on the css and made it look good, but most of my time was spent on the validation part which at the end didn't meet my own expectations.

I've had very little experience with `Yup` and `Formik`, but I made the mistake of diving into it for a limited amount of time. After encountering a bug with Formik I decided to not use it and try to make it simple.

I initially included a "drop box / select" field into the application, but I realised it would be time consuming to make it well functioning, So i only went with text and checkbox input.

If I had a bit more extra time, I would add comments on key functions and explain their purpose.

After some what bad time manage ment, I finished the application at it's current state.

## Bugs
There's one bug that i couldn't make it in time to fix it.

When you remove the feilds in the order of you added them, everything is fine. but when you remove them without order all of the related fields gets removed.

And there are problems with validation for the payload.

I would look into these bugs even the time is over.

---
### `npm i or npm install` to setup the environment

In the project directory, you can run:
### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

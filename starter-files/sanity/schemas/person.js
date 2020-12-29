import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer name
  name: 'person',
  // visible title
  title: 'Slicemasters',
  type: 'document',
  icon, // pasing a react component :)
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Person details',
    },
  ],
};

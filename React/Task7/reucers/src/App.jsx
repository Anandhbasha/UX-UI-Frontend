// import React, { useReducer, useState } from 'react';

// const App=()=> {
//   const studentReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return [...state, action.payload];

//     case 'UPDATE':
//       return state.map(s =>
//         s.id === action.payload.id ? action.payload : s
//       );

//     case 'DELETE':
//       return state.filter(s => s.id !== action.payload);

//     default:
//       return state;
//   }
// };
//   const [students, dispatch] = useReducer(studentReducer, []);
//   const [name, setName] = useState('');
//   const [editId, setEditId] = useState(null);

//   const handleAdd = () => {
//     if (name.trim() === '') return;
//     const newStudent = { id: Date.now(), name };
//     dispatch({ type: 'ADD', payload: newStudent });
//     setName('');
//   };

//   const handleUpdate = () => {
//     dispatch({ type: 'UPDATE', payload: { id: editId, name } });
//     setEditId(null);
//     setName('');
//   };

//   const handleDelete = (id) => {
//     dispatch({ type: 'DELETE', payload: id });
//   };

//   const handleEdit = (student) => {
//     setEditId(student.id);
//     setName(student.name);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md space-y-4">
//       <h2 className="text-xl font-semibold text-center">Student Manager</h2>
      
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={name}
//           placeholder="Enter student name"
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2 flex-1 rounded"
//         />
//         {editId ? (
//           <button onClick={handleUpdate} className="bg-yellow-500 text-white px-3 py-2 rounded">Update</button>
//         ) : (
//           <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-2 rounded">Add</button>
//         )}
//       </div>

//       <ul>
//         {students.map((s) => (
//           <li key={s.id} className="flex justify-between items-center bg-white p-2 mt-2 rounded shadow">
//             <span>{s.name}</span>
//             <div className="space-x-2">
//               <button onClick={() => handleEdit(s)} className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
//               <button onClick={() => handleDelete(s.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App


import React, { useReducer, useState } from 'react';

export default function App() {
  const studentReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, { id: Date.now(), name: action.name }];

      case 'UPDATE':
        return state.map((s) =>
          s.id === action.id ? { ...s, name: action.name } : s
        );

      case 'DELETE':
        return state.filter((s) => s.id !== action.id);

      default:
        return state;
    }
  };

  const [students, dispatch] = useReducer(studentReducer, []);
  const [name, setName] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (name.trim() === '') return;
    dispatch({ type: 'ADD', name });
    setName('');
  };

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE', id: editId, name });
    setEditId(null);
    setName('');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', id });
  };

  const handleEdit = (student) => {
    setEditId(student.id);
    setName(student.name);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      background: '#f4f4f4',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.2)'
    }}>
      <h2 style={{ textAlign: 'center' }}>Student Manager (useReducer)</h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          style={{ flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        {editId ? (
          <button onClick={handleUpdate} style={{ background: '#f39c12', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px' }}>
            Update
          </button>
        ) : (
          <button onClick={handleAdd} style={{ background: '#3498db', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px' }}>
            Add
          </button>
        )}
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {students.map((s) => (
          <li key={s.id} style={{
            background: '#fff',
            margin: '8px 0',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>{s.name}</span>
            <div>
              <button onClick={() => handleEdit(s)} style={{ background: '#27ae60', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', marginRight: '5px' }}>Edit</button>
              <button onClick={() => handleDelete(s.id)} style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
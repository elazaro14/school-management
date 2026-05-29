// 1. Shared Layout Navbar Component
function Navbar({ currentView, setView }) {
  return (
    <nav className="flex justify-between items-center bg-[#007bff] text-white px-6 py-3 shadow-md">
      <h2 className="text-lg font-semibold">🏫 ShuleSys Portal System</h2>
      <div className="flex gap-4 items-center text-sm">
        <button onClick={() => setView('admin')} className={`hover:text-white transition ${currentView === 'admin' ? 'text-white font-bold' : 'text-slate-200'}`}>Admin</button>
        <button onClick={() => setView('teacher')} className={`hover:text-white transition ${currentView === 'teacher' ? 'text-white font-bold' : 'text-slate-200'}`}>Teacher</button>
        <button onClick={() => setView('student')} className={`hover:text-white transition ${currentView === 'student' ? 'text-white font-bold' : 'text-slate-200'}`}>Student</button>
        <button onClick={() => setView('parent')} className={`hover:text-white transition ${currentView === 'parent' ? 'text-white font-bold' : 'text-slate-200'}`}>Parent</button>
      </div>
    </nav>
  );
}

// 2. Reusable Dashboard Card Component
function DashboardCard({ title, description, onClick, icon }) {
  return (
    <div onClick={onClick} className="bg-[#f9f9f9] border border-slate-200 rounded-lg p-5 shadow-sm cursor-pointer transition transform hover:-translate-y-0.5 hover:shadow-md hover:bg-white hover:border-blue-200">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="text-md font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

// 3. Admin View
function AdminDashboard({ setView }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-5">Control Panel</h2>
      <div className="grid grid-columns-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <DashboardCard icon="👨‍🏫" title="Manage Teachers" description="Add, edit, and assign teachers." onClick={() => {}} />
        <DashboardCard icon="🧑‍🎓" title="Manage Students" description="Enroll students and track records." onClick={() => {}} />
        <DashboardCard icon="📅" title="TT-PRO Timetable" description="Configure schedules and manage double period sequences." onClick={() => setView('timetable')} />
        <DashboardCard icon="📊" title="System Settings" description="Configure preferences and systems weights." onClick={() => {}} />
      </div>
    </div>
  );
}

// 4. Teacher View
function TeacherDashboard({ setView }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-5">Teacher Workstation</h2>
      <div className="grid grid-columns-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <DashboardCard icon="📋" title="Mark Attendance" description="Track daily student attendance." onClick={() => {}} />
        <DashboardCard icon="📚" title="Upload Lesson Plans" description="Submit and manage lesson plan structures." onClick={() => {}} />
        <DashboardCard icon="🖋️" title="Enter Grades (T1-T4)" description="Input student assessment scores directly." onClick={() => setView('grading')} />
        <DashboardCard icon="📊" title="View Class Reports" description="Analyze global student performance charts." onClick={() => {}} />
      </div>
    </div>
  );
}

// 5. Student View
function StudentDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-5">My Student Desk</h2>
      <div className="grid grid-columns-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <DashboardCard icon="📅" title="View Timetable" description="Check your weekly class schedule blocks." onClick={() => {}} />
        <DashboardCard icon="📈" title="Check Grades" description="See your continuous assessments and final outputs." onClick={() => {}} />
        <DashboardCard icon="📝" title="Submit Assignments" description="Upload active homework items and assets." onClick={() => {}} />
        <DashboardCard icon="📚" title="Access Resources" description="Download learning notes." onClick={() => {}} />
      </div>
    </div>
  );
}

// 6. Parent View
function ParentDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-5">Parent Portal</h2>
      <div className="grid grid-columns-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <DashboardCard icon="📊" title="Track Performance" description="Monitor terms T1-T4 performance logs." onClick={() => {}} />
        <DashboardCard icon="✅" title="View Attendance" description="Review automated daily presence validation sheets." onClick={() => {}} />
        <DashboardCard icon="💳" title="Check Fee Status" description="Review outstanding balances." onClick={() => {}} />
        <DashboardCard icon="🔔" title="School Alerts" description="Stay up to date with core announcements." onClick={() => {}} />
      </div>
    </div>
  );
}

// 7. Automatic Grading Feature Workspace
function GradingSystem() {
  const [students, setStudents] = React.useState([
    { id: 1, name: "Elazaro John", t1: 75, t2: 82, t3: 68, t4: 90 },
    { id: 2, name: "Alpha Mary", t1: 60, t2: 55, t3: 70, t4: 65 }
  ]);

  const calculateFinal = (t1, t2, t3, t4) => ((t1 + t2 + t3 + t4) / 4).toFixed(1);

  const getGrade = (score) => {
    if (score >= 80) return { letter: "A", color: "text-green-600" };
    if (score >= 70) return { letter: "B", color: "text-blue-600" };
    if (score >= 50) return { letter: "C", color: "text-amber-600" };
    return { letter: "F", color: "text-red-600" };
  };

  const handleScoreChange = (id, field, val) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, [field]: Number(val) || 0 } : s));
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-5">Automatic Grading Manager (T1 - T4)</h3>
      <div className="overflow-x-auto bg-white rounded-lg border border-slate-200 shadow-sm">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <th className="p-4">Student Name</th>
              <th className="p-4">T1</th>
              <th className="p-4">T2</th>
              <th className="p-4">T3</th>
              <th className="p-4">T4</th>
              <th className="p-4">Average</th>
              <th className="p-4">Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => {
              const avg = calculateFinal(s.t1, s.t2, s.t3, s.t4);
              const gradeInfo = getGrade(parseFloat(avg));
              return (
                <tr key={s.id} className="border-b border-slate-100 last:border-none">
                  <td className="p-4 font-semibold text-slate-700">{s.name}</td>
                  {['t1', 't2', 't3', 't4'].map(term => (
                    <td key={term} className="p-4">
                      <input type="number" value={s[term]} onChange={(e) => handleScoreChange(s.id, term, e.target.value)} min="0" max="100" className="w-16 p-1 border border-slate-200 rounded text-center focus:outline-none focus:border-blue-500" />
                    </td>
                  ))}
                  <td className="p-4 font-bold text-slate-800">{avg}%</td>
                  <td className={`p-4 font-bold ${gradeInfo.color}`}>{gradeInfo.letter}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// 8. Timetable Configurations Module
function TimetableConfig() {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-5">TT-PRO Timetable Engine Settings</h3>
      <div className="bg-sky-50 p-5 rounded-lg border-l-4 border-sky-600 mb-6 shadow-sm">
        <strong className="text-sky-900 block mb-2">Rule Matrix Priorities:</strong>
        <ul className="list-disc pl-5 text-sm text-sky-800 space-y-1.5">
          <li>Double periods of the identical subject are designated first priority and scheduled as continuous sequences.</li>
          <li>Double period combinations are locked to appear exactly once per day, leaving zero single isolated gaps.</li>
          <li>Standard breaks and administrative blocks cannot cut through consecutive class run sessions.</li>
        </ul>
      </div>
      <button className="px-5 py-2.5 bg-[#007bff] hover:bg-blue-700 text-white font-semibold rounded shadow transition">
        Generate Class Matrix
      </button>
    </div>
  );
}

// Main Application Controller Setup
function App() {
  const [view, setView] = React.useState('admin');

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar currentView={view} setView={setView} />
      {view === 'admin' && <AdminDashboard setView={setView} />}
      {view === 'teacher' && <TeacherDashboard setView={setView} />}
      {view === 'student' && <StudentDashboard />}
      {view === 'parent' && <ParentDashboard />}
      {view === 'grading' && <GradingSystem />}
      {view === 'timetable' && <TimetableConfig />}
    </div>
  );
}

// Mount the compiled engine directly inside index.html container root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
  

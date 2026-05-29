// 1. Shared Layout Navbar Component
function Navbar({ currentView, setView }) {
  return (
    <nav className="flex justify-between items-center bg-[#2c3e50] text-white px-6 py-3 shadow-md">
      <h2 className="text-lg font-semibold">🏫 ShuleSys Portal System (TT-PRO Engine)</h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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

// 8. Timetable Configurations Module (FULL MATRIX PARSING LOGIC ENGINE)
function TimetableConfig() {
  const [schoolName, setSchoolName] = React.useState(localStorage.getItem('schoolName') || '');
  const [academicYear, setAcademicYear] = React.useState(localStorage.getItem('academicYear') || '');
  const [logoSrc, setLogoSrc] = React.useState(localStorage.getItem('logoSrc') || '');
  const [status, setStatus] = React.useState('Waiting for CSV...');
  const [statusColor, setStatusColor] = React.useState('text-red-500');
  const [rawDataState, setRawDataState] = React.useState([]);
  const [timetableState, setTimetableState] = React.useState([]);
  const [periodsState, setPeriodsState] = React.useState([]);
  const [unavailState, setUnavailState] = React.useState([]);
  const [specialBlocks, setSpecialBlocks] = React.useState([
    { day: "WEDNESDAY", start: "P8", end: "P9", text: "RELIGION", class: "fixed-block" },
    { day: "FRIDAY", start: "P7", end: "P9", text: "", class: "mosque-strips" }
  ]);
  const [currentViewMode, setCurrentViewMode] = React.useState('master'); // master, stream, teacher, load
  const [selectedStream, setSelectedStream] = React.useState('');
  const [selectedTeacher, setSelectedTeacher] = React.useState('');

  // Form setup inputs
  const [startTime, setStartTime] = React.useState('08:00');
  const [periodDuration, setPeriodDuration] = React.useState(40);
  const [breakLabel, setBreakLabel] = React.useState('TEA BREAK');
  const [breakAfter, setBreakAfter] = React.useState('P4');
  const [breakDuration, setBreakDuration] = React.useState(30);
  const [hasLunch, setHasLunch] = React.useState('yes');
  const [lunchLabel, setLunchLabel] = React.useState('LUNCH BREAK');
  const [lunchAfter, setLunchAfter] = React.useState('P6');
  const [lunchDuration, setLunchDuration] = React.useState(45);

  // Special Block Fields
  const [spDay, setSpDay] = React.useState('MONDAY');
  const [spStart, setSpStart] = React.useState('P1');
  const [spEnd, setSpEnd] = React.useState('P1');
  const [spLabel, setSpLabel] = React.useState('');
  const [spStyle, setSpStyle] = React.useState('fixed-block');

  // Unavailability Fields
  const [avTeacher, setAvTeacher] = React.useState('');
  const [avDay, setAvDay] = React.useState('MONDAY');
  const [avPeriod, setAvPeriod] = React.useState('P1');

  // UI styling settings
  const [compactMode, setCompactMode] = React.useState(false);
  const [displayType, setDisplayType] = React.useState('both');
  const [rowHeight, setRowHeight] = React.useState(45);

  const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
  const FORMS = ["F1A","F1B","F1C","F2A","F2B","F2C","F2D","F3A","F3B","F3C","F4A","F4B"];
  const basePList = ["P1","P2","P3","P4","P5","P6","P7","P8","P9"];

  React.useEffect(() => {
    recalculatePeriods();
  }, [startTime, periodDuration, breakLabel, breakAfter, breakDuration, hasLunch, lunchLabel, lunchAfter, lunchDuration]);

  // Expiry Verification Logic Rules
  const checkSystemValidity = () => {
    if (new Date() > new Date("2026-06-30T23:59:59")) {
      alert("ALERT: CONTACT DEVELOPER 0763418732");
      return true;
    }
    return false;
  };

  const togglePanel = (id) => {
    if (checkSystemValidity()) return;
    const p = document.getElementById(id);
    if(p) p.style.display = p.style.display === 'block' ? 'none' : 'block';
  };

  const handleLogoUpload = (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setLogoSrc(event.target.result);
      localStorage.setItem('logoSrc', event.target.result);
    };
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
  };

  const recalculatePeriods = () => {
    let [hours, minutes] = startTime.split(':').map(Number);
    let currentTotalMinutes = hours * 60 + minutes;

    const formatTimeRange = (startMins, durationMins) => {
      let sh = Math.floor(startMins / 60);
      let sm = startMins % 60;
      let eh = Math.floor((startMins + durationMins) / 60);
      let em = (startMins + durationMins) % 60;
      return `${sh}:${sm.toString().padStart(2,'0')}-${eh}:${em.toString().padStart(2,'0')}`;
    };

    let calculatedPeriods = [];

    basePList.forEach(pName => {
      let pRange = formatTimeRange(currentTotalMinutes, parseInt(periodDuration));
      calculatedPeriods.push({ p: pName, t: pRange, rawStart: currentTotalMinutes, rawEnd: currentTotalMinutes + parseInt(periodDuration) });
      currentTotalMinutes += parseInt(periodDuration);

      if (pName === breakAfter) {
        let bRange = formatTimeRange(currentTotalMinutes, parseInt(breakDuration));
        calculatedPeriods.push({ p: "BREAK", t: bRange, label: breakLabel });
        currentTotalMinutes += parseInt(breakDuration);
      }

      if (hasLunch === 'yes' && pName === lunchAfter) {
        let luRange = formatTimeRange(currentTotalMinutes, parseInt(lunchDuration));
        calculatedPeriods.push({ p: "LUNCH", t: luRange, label: lunchLabel });
        currentTotalMinutes += parseInt(lunchDuration);
      }
    });

    setPeriodsState(calculatedPeriods);
  };

  const getSpecialContent = (day, p) => {
    if (p === "BREAK" || p === "LUNCH") return null;
    const nonBreaks = periodsState.filter(x => x.p !== "BREAK" && x.p !== "LUNCH");
    const targetIdx = nonBreaks.findIndex(x => x.p === p);
    if(targetIdx === -1) return null;

    for (let rule of specialBlocks) {
      if (rule.day === day) {
        const startIdx = nonBreaks.findIndex(x => x.p === rule.start);
        const endIdx = nonBreaks.findIndex(x => x.p === rule.end);
        if (targetIdx >= startIdx && targetIdx <= endIdx) {
          return { text: rule.text, class: rule.class };
        }
      }
    }
    return null;
  };

  const addSpecialBlock = () => {
    const nonBreaks = periodsState.filter(x => x.p !== "BREAK" && x.p !== "LUNCH");
    const startIdx = nonBreaks.findIndex(x => x.p === spStart);
    const endIdx = nonBreaks.findIndex(x => x.p === spEnd);

    if (startIdx > endIdx) {
      alert("Invalid range setup! 'From' period cannot fall after 'To' period.");
      return;
    }

    setSpecialBlocks([...specialBlocks, { day: spDay, start: spStart, end: spEnd, text: spLabel.toUpperCase(), class: spStyle }]);
    setSpLabel('');
  };

  const removeSpecialBlock = (index) => {
    setSpecialBlocks(specialBlocks.filter((_, i) => i !== index));
  };

  const handleCsvUpload = (e) => {
    if (checkSystemValidity()) return;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const lines = event.target.result.split('\n').slice(1).filter(l => l.trim());
        const parsed = lines.map(l => {
          const p = l.split(',');
          return { subject: p[0].trim(), teacher: p[1].trim(), form: p[3].trim() };
        });
        
        setRawDataState(parsed);
        setStatusColor('text-green-600');
        setStatus(`Data loaded: ${parsed.length} lessons. Ready to generate.`);
        
        const uniqueTeachers = [...new Set(parsed.map(x => x.teacher))].sort();
        if(uniqueTeachers.length > 0) setAvTeacher(uniqueTeachers[0]);
      } catch (err) {
        setStatus("Error reading CSV format.");
        setStatusColor('text-red-500');
      }
    };
    reader.readAsText(file);
  };

  const addUnavailability = () => {
    if(!avTeacher) return;
    if(!unavailState.some(u => u.t === avTeacher && u.d === avDay && u.p === avPeriod)) {
      setUnavailState([...unavailState, { t: avTeacher, d: avDay, p: avPeriod }]);
    }
  };

  const removeAvail = (index) => {
    setUnavailState(unavailState.filter((_, i) => i !== index));
  };

  const canPlace = (d, p, l, currentTimetable) => {
    const isTeacherBusy = currentTimetable.some(t => t.day === d && t.period === p && t.teacher === l.teacher);
    const isFormBusy = currentTimetable.some(t => t.day === d && t.period === p && t.form === l.form);
    const isTeacherOff = unavailState.some(u => u.t === l.teacher && u.d === d && u.p === p);
    return !isTeacherBusy && !isFormBusy && !isTeacherOff;
  };

  const startGeneration = () => {
    if (checkSystemValidity()) return;
    let tempTimetable = [];
    const vp = ["P1","P2","P3","P4","P5","P6","P7","P8","P9"];
    
    const bAfterIdx = vp.indexOf(breakAfter);
    const lAfterIdx = hasLunch === 'yes' ? vp.indexOf(lunchAfter) : -1;

    const grouped = {};
    rawDataState.forEach(l => {
      const k = `${l.form}-${l.subject}`;
      if(!grouped[k]) grouped[k] = [];
      grouped[k].push(l);
    });

    Object.values(grouped).forEach(lessons => {
      let rem = lessons.length;
      
      // Step A: Double period combinations (Priority 1)
      while(rem >= 2) {
        let placed = false;
        for(let att = 0; att < 400; att++) {
          const day = DAYS[Math.floor(Math.random()*5)];
          const idx = Math.floor(Math.random()*8);
          const p1 = vp[idx], p2 = vp[idx+1];
          
          if (idx === bAfterIdx || (hasLunch === 'yes' && idx === lAfterIdx)) continue;

          const dayC = tempTimetable.filter(x => x.day === day && x.form === lessons[0].form && x.subject === lessons[0].subject).length;
          if(dayC === 0 && canPlace(day, p1, lessons[0], tempTimetable) && canPlace(day, p2, lessons[0], tempTimetable) && !getSpecialContent(day, p1) && !getSpecialContent(day, p2)) {
            tempTimetable.push({...lessons[0], day, period: p1});
            tempTimetable.push({...lessons[0], day, period: p2});
            rem -= 2; placed = true; break;
          }
        }
        if(!placed) break;
      }
      
      // Step B: Single isolated items
      while(rem > 0) {
        let placedSingle = false;
        for(let att = 0; att < 300; att++) {
          const day = DAYS[Math.floor(Math.random()*5)];
          const per = vp[Math.floor(Math.random()*9)];
          const perIdx = vp.indexOf(per);
          
          const isAdjacentToBreak = (perIdx === bAfterIdx || perIdx === bAfterIdx + 1);
          let hasSubjectOnOtherSide = false;
          if (isAdjacentToBreak) {
            const otherSide = (perIdx === bAfterIdx) ? vp[bAfterIdx + 1] : vp[bAfterIdx];
            hasSubjectOnOtherSide = tempTimetable.some(x => x.day === day && x.period === otherSide && x.form === lessons[0].form && x.subject === lessons[0].subject);
          }
          
          if (hasLunch === 'yes' && !hasSubjectOnOtherSide) {
            const isAdjacentToLunch = (perIdx === lAfterIdx || perIdx === lAfterIdx + 1);
            if (isAdjacentToLunch) {
              const otherLunchSide = (perIdx === lAfterIdx) ? vp[lAfterIdx + 1] : vp[lAfterIdx];
              hasSubjectOnOtherSide = tempTimetable.some(x => x.day === day && x.period === otherLunchSide && x.form === lessons[0].form && x.subject === lessons[0].subject);
            }
          }

          const dayC = tempTimetable.filter(x => x.day === day && x.form === lessons[0].form && x.subject === lessons[0].subject).length;
          if(dayC === 0 && canPlace(day, per, lessons[0], tempTimetable) && !getSpecialContent(day, per) && !hasSubjectOnOtherSide) {
            tempTimetable.push({...lessons[0], day, period: per});
            rem--; placedSingle = true; break;
          }
        }
        if(!placedSingle) rem--;
      }
    });

    setTimetableState(tempTimetable);
    setCurrentViewMode('master');
  };

  const clearSystemBackup = () => {
    localStorage.clear();
    setSchoolName('');
    setAcademicYear('');
    setLogoSrc('');
    setRawDataState([]);
    setTimetableState([]);
    setUnavailState([]);
    setStatus('Waiting for CSV...');
    setStatusColor('text-red-500');
  };

  const uniqueTeachersList = [...new Set(rawDataState.map(x => x.teacher))].sort();

  return (
    <div className={`p-4 ${compactMode ? 'compact-mode' : ''}`} style={{ fontSize: compactMode ? '9.5px' : '11px' }}>
      <div className="bg-white p-5 rounded-lg shadow-md max-w-[1450px] mx-auto mb-6">
        
        {/* Core Inputs Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 items-center">
          <input type="file" id="logoUpload" accept="image/*" className="hidden" onChange={handleLogoUpload} />
          <button onClick={() => document.getElementById('logoUpload').click()} className="bg-slate-500 text-white px-3 py-1.5 rounded font-bold text-xs">Add Logo</button>
          <input type="text" value={schoolName} placeholder="ENTER SCHOOL NAME" className="border-b-2 border-[#2c3e50] font-bold text-base text-center p-1 outline-none bg-transparent w-[350px]" onChange={(e) => { setSchoolName(e.target.value.toUpperCase()); localStorage.setItem('schoolName', e.target.value.toUpperCase()); }} />
          <input type="text" value={academicYear} placeholder="ACADEMIC YEAR" className="border-b-2 border-[#2c3e50] font-bold text-base text-center p-1 outline-none bg-transparent w-[200px]" onChange={(e) => { setAcademicYear(e.target.value.toUpperCase()); localStorage.setItem('academicYear', e.target.value.toUpperCase()); }} />
        </div>

        {/* Action Controls Section */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <input type="file" id="csvFile" accept=".csv" className="hidden" onChange={handleCsvUpload} />
          <button onClick={() => document.getElementById('csvFile').click()} className="bg-blue-600 text-white px-3 py-2 rounded font-bold text-xs">Upload CSV</button>
          <button onClick={() => togglePanel('configPanel')} className="bg-amber-500 text-black px-3 py-2 rounded font-bold text-xs">Configure Timeline & Blocks</button>
          <button onClick={() => togglePanel('availPanel')} className="bg-cyan-600 text-white px-3 py-2 rounded font-bold text-xs">Set Teacher Off-Times</button>
          <button onClick={startGeneration} disabled={rawDataState.length === 0} className="bg-green-600 text-white px-4 py-2 rounded font-bold text-xs disabled:opacity-50">Generate Timetable</button>
          <button onClick={clearSystemBackup} className="bg-red-600 text-white px-3 py-2 rounded font-bold text-xs">Reset System Data</button>
          <button onClick={() => window.print()} className="bg-slate-700 text-white px-3 py-2 rounded font-bold text-xs">Print</button>
        </div>

        {/* 1. Timeline Configurations Panel */}
        <div id="configPanel" className="bg-slate-50 border border-dashed border-slate-300 p-4 rounded mb-4 hidden">
          <h4 className="font-bold text-[#2c3e50] mb-2 text-sm border-b pb-1">1. Timeline Configurations</h4>
          <div className="flex flex-wrap gap-4 items-center text-xs mb-3">
            <label className="flex items-center gap-1">Start Time: <input type="time" value={startTime} className="border p-1 rounded" onChange={(e) => setStartTime(e.target.value)} /></label>
            <label className="flex items-center gap-1">Period Duration: <input type="number" value={periodDuration} className="border p-1 rounded w-12 text-center" onChange={(e) => setPeriodDuration(e.target.value)} /> mins</label>
            <span className="border-l h-5 mx-1 hidden sm:inline" />
            <label className="flex items-center gap-1">Break Label: <input type="text" value={breakLabel} className="border p-1 rounded w-24 text-center" onChange={(e) => setBreakLabel(e.target.value.toUpperCase())} /></label>
            <label className="flex items-center gap-1">After Period: 
              <select value={breakAfter} className="border p-1 rounded" onChange={(e) => setBreakAfter(e.target.value)}>
                {basePList.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>
            <label className="flex items-center gap-1">Break Duration: <input type="number" value={breakDuration} className="border p-1 rounded w-12 text-center" onChange={(e) => setBreakDuration(e.target.value)} /> mins</label>
          </div>
          <div className="flex flex-wrap gap-4 items-center text-xs border-t pt-3">
            <label className="flex items-center gap-1">Include Lunch Break? 
              <select value={hasLunch} className="border p-1 rounded" onChange={(e) => setHasLunch(e.target.value)}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="flex items-center gap-1">Lunch Label: <input type="text" value={lunchLabel} className="border p-1 rounded w-24 text-center" onChange={(e) => setLunchLabel(e.target.value.toUpperCase())} /></label>
            <label className="flex items-center gap-1">After Period: 
              <select value={lunchAfter} className="border p-1 rounded" onChange={(e) => setLunchAfter(e.target.value)}>
                {basePList.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>
            <label className="flex items-center gap-1">Lunch Duration: <input type="number" value={lunchDuration} className="border p-1 rounded w-12 text-center" onChange={(e) => setLunchDuration(e.target.value)} /> mins</label>
          </div>

          <h4 className="font-bold text-[#2c3e50] mt-4 mb-2 text-sm border-b pb-1">2. Custom Special Fixed Blocks</h4>
          <div className="flex flex-wrap gap-3 items-center text-xs">
            <select value={spDay} className="border p-1 rounded" onChange={(e) => setSpDay(e.target.value)}>
              {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <label className="flex items-center gap-1">From: 
              <select value={spStart} className="border p-1 rounded" onChange={(e) => setSpStart(e.target.value)}>
                {basePList.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>
            <label className="flex items-center gap-1">To: 
              <select value={spEnd} className="border p-1 rounded" onChange={(e) => setSpEnd(e.target.value)}>
                {basePList.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </label>
            <input type="text" value={spLabel} placeholder="e.g. DEBATE" className="border p-1 rounded w-28 uppercase" onChange={(e) => setSpLabel(e.target.value)} />
            <select value={spStyle} className="border p-1 rounded" onChange={(e) => setSpStyle(e.target.value)}>
              <option value="fixed-block">Religion / Debate Style (Cyan)</option>
              <option value="mosque-strips">Mosque Style (Yellow Pattern)</option>
            </select>
            <button onClick={addSpecialBlock} className="bg-green-600 text-white px-2 py-1 rounded font-bold">Add Fixed Block</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {specialBlocks.map((b, i) => (
              <span key={i} className="bg-slate-200 text-slate-800 px-2 py-1 rounded text-[10px] border border-slate-300">
                {b.day} [{b.start}-{b.end}] <b>{b.text || 'STRIPS'}</b>
                <button onClick={() => removeSpecialBlock(i)} className="text-red-600 ml-2 font-bold hover:text-red-800">×</button>
              </span>
            ))}
          </div>
        </div>

        {/* 2. Teacher Unavailability Panel */}
        <div id="availPanel" className="bg-slate-50 border border-dashed border-slate-300 p-4 rounded mb-4 hidden">
          <h4 className="font-bold text-[#2c3e50] mb-2 text-sm border-b pb-1">Teacher Unavailability (Off-Times)</h4>
          <div className="flex flex-wrap gap-3 items-center text-xs">
            <select value={avTeacher} className="border p-1 rounded" onChange={(e) => setAvTeacher(e.target.value)}>
              {uniqueTeachersList.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select value={avDay} className="border p-1 rounded" onChange={(e) => setAvDay(e.target.value)}>
              {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={avPeriod} className="border p-1 rounded" onChange={(e) => setAvPeriod(e.target.value)}>
              {basePList.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <button onClick={addUnavailability} className="bg-blue-600 text-white px-3 py-1 rounded font-bold">Add Rule</button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {unavailState.map((u, i) => (
              <span key={i} className="bg-slate-200 text-slate-800 px-2 py-1 rounded text-[10px]">
                {u.t} ({u.d} {u.p})
                <button onClick={() => removeAvail(i)} className="text-red-600 ml-2 font-bold">×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Render Parameters Sliders */}
        <div className="flex flex-wrap gap-4 items-center justify-center text-xs font-bold border-t pt-3 text-slate-700">
          <label className="flex items-center gap-1 cursor-pointer"><input type="checkbox" checked={compactMode} onChange={(e) => setCompactMode(e.target.checked)} /> Compact Mode</label>
          <span>|</span>
          <label className="flex items-center gap-1">Display:
            <select value={displayType} className="border p-0.5 rounded font-bold bg-slate-50" onChange={(e) => setDisplayType(e.target.value)}>
              <option value="both">Subject & Teacher</option>
              <option value="subOnly">Subject Only</option>
            </select>
          </label>
          <span>|</span>
          <label className="flex items-center gap-1">Row Height: 
            <input type="range" min="30" max="60" value={rowHeight} className="align-middle" onChange={(e) => setRowHeight(parseInt(e.target.value))} />
          </label>
        </div>

        <div className={`text-center mt-3 font-bold text-xs ${statusColor}`}>{status}</div>

        {/* Filter View Switchers Container */}
        {timetableState.length > 0 && (
          <div className="bg-slate-100 p-3 rounded-lg text-center mt-3 flex flex-wrap gap-3 justify-center items-center">
            <button onClick={() => setCurrentViewMode('master')} className="bg-slate-700 text-white px-3 py-1 rounded text-xs font-bold">Full School View</button>
            <select value={selectedStream} className="border p-1 rounded text-xs bg-white" onChange={(e) => { setSelectedStream(e.target.value); setCurrentViewMode('stream'); }}>
              <option value="">-- View Class --</option>
              {FORMS.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
            <select value={selectedTeacher} className="border p-1 rounded text-xs bg-white" onChange={(e) => { setSelectedTeacher(e.target.value); setCurrentViewMode('teacher'); }}>
              <option value="">-- View Teacher --</option>
              {uniqueTeachersList.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button onClick={() => setCurrentViewMode('load')} className="bg-purple-700 text-white px-3 py-1 rounded text-xs font-bold">Load Summary</button>
          </div>
        )}
      </div>

      {/* RENDER MATRIX WORKSPACE ENGINE OUTPUT */}
      <div id="output" className="max-w-[1450px] mx-auto">
        
        {/* Render Title Print Block Header */}
        {timetableState.length > 0 && (
          <div className="flex items-center justify-center gap-5 mb-5 text-center border-b pb-4">
            {logoSrc ? <img src={logoSrc} className="h-16 w-16 object-contain" alt="Logo" /> : <div className="w-16" />}
            <div>
              <h1 className="text-xl font-black text-slate-800 uppercase tracking-wide">{schoolName || "SCHOOL NAME"}</h1>
              <h2 className="text-sm font-semibold text-slate-600 uppercase">
                {currentViewMode === 'master' && `MASTER TIMETABLE - ${academicYear || "2026"}`}
                {currentViewMode === 'stream' && `CLASS VIEW: ${selectedStream} - ${academicYear || "2026"}`}
                {currentViewMode === 'teacher' && `TEACHER TIMETABLE VIEW: ${selectedTeacher} - ${academicYear || "2026"}`}
                {currentViewMode === 'load' && `TEACHER LESSONS LOAD SUMMARY - ${academicYear || "2026"}`}
              </h2>
            </div>
            <div className="w-16" />
          </div>
        )}

        {/* VIEW 1: MASTER MULTI-GRID */}
        {timetableState.length > 0 && currentViewMode === 'master' && DAYS.map(day => (
          <div key={day} className="mb-6 overflow-x-auto bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <div className="bg-[#34495e] text-white py-1.5 px-4 font-bold text-sm text-center rounded tracking-wider uppercase mb-3">{day}</div>
            <table className="w-full border-collapse border border-slate-400 table-fixed min-w-[900px]">
              <thead>
                <tr className="bg-[#2c3e50] text-white">
                  <th className="border border-slate-400 p-1 text-xs w-[80px]">STREAM</th>
                  {periodsState.map((p, idx) => (
                    <th key={idx} className={`border border-slate-400 p-1 text-center font-bold ${p.p === 'BREAK' || p.p === 'LUNCH' ? 'w-[30px]' : ''}`} style={{ fontSize: compactMode ? '9.5px' : '11px' }}>
                      {p.p}
                      <span className="block font-normal text-[9px] opacity-90">{p.t}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FORMS.map((form, fIdx) => (
                  <tr key={form} style={{ height: `${rowHeight}px` }}>
                    <td className="border border-slate-400 bg-slate-50 font-bold text-center text-xs text-slate-700">{form}</td>
                    {periodsState.map((p, pIdx) => {
                      const special = getSpecialContent(day, p.p);
                      if (p.p === "BREAK") return <td key={pIdx} className="border border-slate-400 bg-slate-100 text-slate-500 text-[9px] font-black tracking-widest text-center uppercase" style={{ writingMode: 'vertical-rl' }}>{breakLabel}</td>;
                      if (p.p === "LUNCH") return <td key={pIdx} className="border border-slate-400 bg-slate-100 text-slate-500 text-[9px] font-black tracking-widest text-center uppercase" style={{ writingMode: 'vertical-rl' }}>{lunchLabel}</td>;
                      if (special) return <td key={pIdx} className={`border border-slate-400 text-center font-bold text-xs ${special.class === 'fixed-block' ? 'bg-cyan-100 text-cyan-800 italic' : 'bg-yellow-50 text-yellow-800'}`}>{special.text}</td>;
                      
                      const match = timetableState.find(x => x.day === day && x.period === p.p && x.form === form);
                      return (
                        <td key={pIdx} className="border border-slate-400 text-center p-1 font-medium text-slate-800" style={{ fontSize: compactMode ? '9.5px' : '11px' }}>
                          {match ? (
                            <>
                              <b className="text-slate-900 block">{match.subject}</b>
                              {displayType === 'both' && <span className="text-[10px] text-slate-500 block">{match.teacher}</span>}
                            </>
                          ) : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* VIEW 2: INDIVIDUAL CLASS STREAM VIEW */}
        {timetableState.length > 0 && currentViewMode === 'stream' && selectedStream && (
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full border-collapse border border-slate-400 min-w-[800px]">
              <thead>
                <tr className="bg-[#2c3e50] text-white">
                  <th className="border border-slate-400 p-2 text-xs w-[120px]">DAY</th>
                  {periodsState.map((p, idx) => (
                    <th key={idx} className="border border-slate-400 p-2 text-xs text-center font-bold">
                      {p.p} <span className="block font-normal text-[10px] opacity-80">{p.t}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DAYS.map(day => (
                  <tr key={day} style={{ height: `${rowHeight}px` }}>
                    <td className="border border-slate-400 bg-slate-50 font-bold p-2 text-slate-700 text-center">{day}</td>
                    {periodsState.map((p, pIdx) => {
                      const special = getSpecialContent(day, p.p);
                      if (p.p === "BREAK") return <td key={pIdx} className="border border-slate-400 bg-slate-100 text-slate-500 text-xs font-bold text-center uppercase tracking-wider">{breakLabel}</td>;
                      if (p.p === "LUNCH") return <td key={pIdx} className="border border-slate-400 bg-slate-100 text-slate-500 text-xs font-bold text-center uppercase tracking-wider">{lunchLabel}</td>;
                      if (special) return <td key={pIdx} className={`border border-slate-400 text-center font-bold text-xs ${special.class === 'fixed-block' ? 'bg-cyan-100 text-cyan-800' : 'bg-yellow-50 text-yellow-800'}`}>{special.text}</td>;
                      
                      const match = timetableState.find(x => x.day === day && x.period === p.p && x.form === selectedStream);
                      return (
                        <td key={pIdx} className="border border-slate-400 text-center p-2">
                          {match ? (
                            <>
                              <b className="text-slate-900 block text-xs">{match.subject}</b>
                              <span className="text-[10px] text-slate-500">{match.teacher}</span>
                            </>
                          ) : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* VIEW 3: TEACHER OWN TRACK VIEW */}
        {timetableState.length > 0 && currentViewMode === 'teacher' && selectedTeacher && (
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full border-collapse border border-slate-400 min-w-[800px]">
              <thead>
                <tr className="bg-[#2c3e50] text-white">
                  <th className="border border-slate-400 p-2 text-xs w-[120px]">DAY</th>
                  {periodsState.map((p, idx) => (
                    <th key={idx} className="border border-slate-400 p-2 text-xs text-center font-bold">
                      {p.p} <span className="block font-normal text-[10px] opacity-80">{p.t}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DAYS.map(day => (
                  <tr key={day} style={{ height: `${rowHeight}px` }}>
                    <td className="border border-slate-400 bg-slate-50 font-bold p-2 text-slate-700 text-center">{day}</td>
                    {periodsState.map((p, pIdx) => {
                      const isOff = unavailState.some(u => u.t === selectedTeacher && u.d === day && u.p === p.p);
                      const special = getSpecialContent(day, p.p);
                      
                      if (p.p === "BREAK") return <td key={pIdx} className="border border-slate-400 bg-slate-100 text-slate-500 text-xs font-bold text-center uppercase">{breakLabel}</td>;
                      if (p.p === "LUNCH") return <td key={pIdx} className="border border-slate-400 bg-slate-100 text-slate-500 text-xs font-bold text-center uppercase">{lunchLabel}</td>;
                      if (isOff) return <td key={pIdx} className="border border-slate-400 bg-red-100 text-red-700 font-bold text-center text-[10px] tracking-wide uppercase">OFF-TIME</td>;
                      if (special) return <td key={pIdx} className={`border border-slate-400 text-center font-bold text-xs ${special.class === 'fixed-block' ? 'bg-cyan-100 text-cyan-800' : 'bg-yellow-50 text-yellow-800'}`}>{special.text || 'SPECIAL BLOCK'}</td>;
                      
                      const match = timetableState.find(x => x.day === day && x.period === p.p && x.teacher === selectedTeacher);
                      return (
                        <td key={pIdx} className="border border-slate-400 text-center p-2">
                          {match ? (
                            <>
                              <b className="text-slate-900 block text-xs">{match.subject}</b>
                              <span className="text-[10px] text-blue-600 font-bold">{match.form}</span>
                            </>
                          ) : ''}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* VIEW 4: TEACHERS LOAD SUMMARY TABLE */}
        {timetableState.length > 0 && currentViewMode === 'load' && (
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm max-w-[800px] mx-auto">
            <table className="w-full border-collapse border border-slate-400">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-400 p-2 text-left text-xs">TEACHER NAME</th>
                  <th className="border border-slate-400 p-2 text-center text-xs w-[150px]">TOTAL PERIODS ALLOCATED</th>
                  <th className="border border-slate-400 p-2 text-center text-xs w-[120px]">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {uniqueTeachersList.map(teacher => {
                  const count = timetableState.filter(x => x.teacher === teacher).length;
                  const isOverloaded = count > 30;
                  return (
                    <tr key={teacher} className={isOverloaded ? 'bg-red-50 text-red-600 font-bold' : ''}>
                      <td className="border border-slate-400 p-2 text-sm font-semibold">{teacher}</td>
                      <td className="border border-slate-400 p-2 text-center text-sm font-bold">{count}</td>
                      <td className="border border-slate-400 p-2 text-center text-xs font-bold uppercase">
                        {isOverloaded ? '⚠️ Overload' : '✅ Normal'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

      </div>
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

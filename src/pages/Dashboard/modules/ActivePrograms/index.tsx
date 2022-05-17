import React, {useState} from 'react';
import axios from 'axios'

import ActiveProgram from './ActiveProgram'

function ActivePrograms() {
	const [programsList, setProgramsList] = useState<ActivePrograms[]>([]);
  const fetchProgramsList = async () => {
    await axios
      .get("/base/activePrograms.json")
      .then((res) => setProgramsList(res.data));
  };

  React.useEffect(() => {
    try {
      fetchProgramsList();
    } catch (error) {
      alert("Error: cannot render active programs list");
    }
  }, []);

	return (
		<div className="my-5 p-6 w-[787px] h-[305px] rounded-[20px] bg-white">
			<h2 className="text-[#333269] font-medium">Active Programs</h2>
			<ul>
			{programsList.map((e) => (
          <ActiveProgram
					key={e.title}
					title={e.title}
					university={e.university}
					universityImage={e.universityImage}
					overdueAssignments={e.overdueAssignments}
					remainingAbsenses={e.remainingAbsenses}
					academicAverage={e.academicAverage}
					completion={e.completion}
          />
        ))}
				</ul> 
		</div>
	)
}

export default ActivePrograms;
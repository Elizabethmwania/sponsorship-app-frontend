import React, { useState }  from 'react';
import Header from './Header';
import '../styles.scss'
const tableData = [
    {
        id: 1,
        firstname: 'Elizabeth',
        lastname: 'Mwania',
        homeAddress: '34',
        email: 'yes@gmail.com',
        phone: '0793927883',
        idFile:'id.pdf',
        certFile: 'cert.pdf',
        schoolName: 'Maseno',
        schoolAddress: '25',
        academicLevel: 'Degree',
        completionYear: '2021',
        reason: 'I love it',
    }
]

const SponsorDashboard = () => {
    const statusOptions = [
        { value: '', text: 'Approved...' },
        { value: 'confirm', text: 'Confirm' }
    ];
    const [selected, setSelected]= useState(statusOptions[0].value);

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
    };

    const DisplayData=tableData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.firstname}</td>
					<td>{info.lastname}</td>
                    <td>{info.homeAddress}</td>
                    <td>{info.email}</td>
                    <td>{info.phone}</td>
                    <td>{info.idFile}</td>
                    <td>{info.certFile}</td>
                    <td>{info.schoolName}</td>
                    <td>{info.schoolAddress}</td>
                    <td>{info.academicLevel}</td>
                    <td>{info.completionYear}</td>
                    <td>{info.reason}</td>
                    <td>
                        <select value={selected} onChange={handleChange}>
                            {statusOptions.map(statusOption => (
                                <option key={statusOption.value} value={statusOption.value}>
                                    {statusOption.text}
                                </option>
                            ))}
                        </select>
                    </td>
				</tr>
			)
		}
	)

    return (
        <>
        <Header/>
        <div className='container'>
            <h2>Approved sponsorship Applications</h2>

            <div className='table-responsive'>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>S/No.</th>
					<th>First Name</th>
                    <th>Last Name</th>
					<th>Home Adress</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>ID Copy</th>
                    <th>Certificate</th>
                    <th>Shool Name</th>
                    <th>School Address</th>
                    <th>Academic Level</th>
                    <th>Complition Year</th>
                    <th>Motivation</th>
                    <th>Status</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
        </div>
        </>
    );
};

export default SponsorDashboard;
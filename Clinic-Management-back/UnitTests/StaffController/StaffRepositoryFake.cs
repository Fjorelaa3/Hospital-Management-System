using Entities.Models;
using IRepository;
using Shared.DTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTests
{
    internal class StaffRepositoryFake : IServiceStaffRepository
    {
        private readonly IEnumerable<ServiceStaff> _staffs;

        public StaffRepositoryFake()
        {
            _staffs = new List<ServiceStaff>()
            {
                new ServiceStaff() { Id = 1, StaffId = 1, ServiceId = 1, Staff = new User { FirstName = "John", LastName = "Doe" }, Service = new Services { Name = "Cardiology" } },
                new ServiceStaff() { Id = 2, StaffId = 2, ServiceId = 2, Staff = new User { FirstName = "Jane", LastName = "Smith" }, Service = new Services { Name = "Neurology" } },
                new ServiceStaff() { Id = 3, StaffId = 3, ServiceId = 3, Staff = new User { FirstName = "Alice", LastName = "Johnson" }, Service = new Services { Name = "Orthopedics" } }
            };
        }

        public void CreateRecord(ServiceStaff serviceStaff)
        {
            serviceStaff.Id = _staffs.Max(ss => ss.Id) + 1;
            _staffs.Concat(new[] { serviceStaff });
        }

        public void DeleteRecord(ServiceStaff serviceStaff)
        {
           throw new NotImplementedException();
        }

        public async Task<IEnumerable<ServiceStaff>> GetAllRecords() => _staffs;

        public async Task<IEnumerable<ServiceStaff>> GetAllRecordsByServiceId(int serviceId) => _staffs.Where(ss => ss.ServiceId == serviceId);

        public async Task<ServiceStaff> GetRecordByIdAsync(int id) => _staffs.FirstOrDefault(ss => ss.Id == id);

        public void UpdateRecord(ServiceStaff serviceStaff)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<StaffResponseDTO>> GetStaffInfo() => _staffs.Select(ss => new StaffResponseDTO { Id = ss.Id, ServiceId = ss.ServiceId, ServiceName = ss.Service.Name, DoctorFirstName = ss.Staff.FirstName, DoctorLastName = ss.Staff.LastName }).ToList();

        public async Task<StaffResponseDTO> GetStaffInfoById(int staffId)
        {
            return _staffs.Where(ss => ss.Id == staffId).Select(ss => new StaffResponseDTO { Id = ss.Id, ServiceName = ss.Service.Name, DoctorFirstName = ss.Staff.FirstName, DoctorLastName = ss.Staff.LastName }).FirstOrDefault();
        }
    }
}


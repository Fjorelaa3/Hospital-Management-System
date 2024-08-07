using IRepository;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTests
{
    internal class RepositoryManagerFake : IRepositoryManager
    {
        private readonly Lazy<IEquipmentRepository> _equipmentRepository;
        private readonly Lazy<IServiceStaffRepository> _staffRepository;

        public RepositoryManagerFake()
        {
            _equipmentRepository = new Lazy<IEquipmentRepository>(() => new EquipmentRepositoryFake());
            _staffRepository = new Lazy<IServiceStaffRepository>(() => new StaffRepositoryFake());
        }

        public IEquipmentRepository EquipmentRepository => _equipmentRepository.Value;

        public IMenuRepository MenuRepository => throw new NotImplementedException();

        public IReservationRepository ReservationRepository => throw new NotImplementedException();

        public IServiceRepository ServiceRepository => throw new NotImplementedException();

        public IServiceEquipmentRepository ServiceEquipmentRepository => throw new NotImplementedException();

        public IUserRepository UserRepository => throw new NotImplementedException();

        public IServiceStaffRepository ServiceStaffRepository => _staffRepository.Value;

        public IWorkingHoursRepository WorkingHoursRepository => throw new NotImplementedException();

        public IClientRepository ClientRepository => throw new NotImplementedException();

        public ICheckInRepository CheckInRepository => throw new NotImplementedException();

        public Task SaveAsync()
        {
            throw new NotImplementedException();
        }
    }
}

using AutoMapper;
using Cryptography;
using Entities.Configuration;
using Entities.Models;
using IRepository;
using IService;
using LoggerService;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Service;
using Shared.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTests
{
    internal class ServiceManagerFake : IServiceManager
    {

        private readonly Lazy<IEquipmentService> _equipmentService;
        private readonly Lazy<IStaffService> _staffService;

        public ServiceManagerFake(IRepositoryManager repositoryManager, IMapper mapper)
        {
            _equipmentService = new Lazy<IEquipmentService>(() => new EquipmentServiceFake(repositoryManager,mapper));
            _staffService = new Lazy<IStaffService>(() => new StaffServiceFake(repositoryManager, mapper));
        }

        public IUserService UserService => throw new NotImplementedException();

        public IAuthenticationService AuthenticationService => throw new NotImplementedException();

        public IServicesService ServicesService => throw new NotImplementedException();

        public IEquipmentService EquipmentService => _equipmentService.Value;

        public IStaffService StaffService => _staffService.Value;

        public IMenuService MenuService => throw new NotImplementedException();

        public IClientService ClientService => throw new NotImplementedException();

        public IReservationService ReservationService => throw new NotImplementedException();

        public ICheckInService CheckInService => throw new NotImplementedException();
    }
}

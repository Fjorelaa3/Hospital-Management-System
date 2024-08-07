using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities.Models;
using IRepository;

namespace UnitTests
{
    internal class EquipmentRepositoryFake : IEquipmentRepository
    {
        private readonly IEnumerable<Equipment> _equipments;

        public EquipmentRepositoryFake() 
        {
            _equipments = new List<Equipment>()
            {
                new Equipment() {Id = 1, Name = "MRI", ProducedAt = DateTime.UtcNow},
                new Equipment() {Id = 2, Name = "X-ray", ProducedAt = DateTime.UtcNow},
                new Equipment() {Id = 3, Name = "EKG", ProducedAt = DateTime.UtcNow}
            };
        }
        public void CreateRecord(Equipment equipment)
        {
            equipment.Id = 4;
            _equipments.Concat(new[] {equipment });
        }

        public void DeleteRecord(Equipment equipment)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Equipment>> GetAllRecords() =>  _equipments;

        public async Task<Equipment> GetRecordByIdAsync(int id) => _equipments.FirstOrDefault(e => e.Id.Equals(id));

        public void UpdateRecord(Equipment equipment)
        {
            throw new NotImplementedException();
        }
    }
}

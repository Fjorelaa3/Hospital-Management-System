﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.DTO.Request;

public class EquipmentRequestDTO
{
    public string Name { get; set; }

    public DateTime? ProducedAt { get; set; }
}

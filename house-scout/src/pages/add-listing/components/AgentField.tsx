import { Select } from "../../../components";
import { AgentType } from "../../../toolkit/types";

interface AgentProps {
  agents: AgentType[] | null;
  openModal: () => void;
}

type OptionType = { value: number; label: string };

function AgentField({ agents, openModal }: AgentProps) {
  const agentOptions: OptionType[] = [];

  agents?.forEach((agent) =>
    agentOptions.push({
      value: agent.id,
      label: agent.name + " " + agent.surname,
    })
  );

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      <Select
        options={agentOptions}
        name="agent_id"
        label="აირჩიე *"
        isAgent={true}
        openModal={openModal}
      />
      <div className="hidden flex-1 gap-[5px] lg:w-[384px] md:block"></div>
    </div>
  );
}

export default AgentField;

class ClimaticZones {
    constructor(country) {
        this.region = this.climats[country] || '��� ������'
    }

    getClimate() {
        console.log(this.region)
    }

    climats = {
        "�������������� ������� ������": "��������������",
        "�������������� ������� ����� �������": "��������������",
        "�������������� ������� �������": "��������������",
        "����� � ���-��������� ����": "����������� ���������",
        "�������� � ����������� ������": "����������� ���������",
        "�������� ���������": "����������� ���������",
        "�������� ������": "����������� �����",
        "����������� ���������": "����������� �����",
        "���������������": "�����������������",
        "����� ����� �����": "�����������������",
        "����� ������": "�����������������",
        "���-�������� ���������": "�����������������",
        "�������� ����������": "�����������������",
        "�������� ����� �������": "��������� �������",
        "�������� ����� �������� �������": "��������� �������",
        "���������� ����� ���������": "��������� ���������������",
        "��������� ������� �������": "��������� ���������",
        "�������� ������� �������": "��������������",
        "�������� ������� �������� �������": "��������������",
        "��������� ��������� ���������� ������": "�����������"
    }
}